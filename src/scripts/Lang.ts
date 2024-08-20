export default class Lang {
    static #browserLanguageCode = null;
    static #fallbackLanguageCode = "en";
    static #translationFilesRootFolder = "/langs";

    static #fetchedTranslationFiles: any = {};
    static #onlanguageChangeEvents: any = [];
    static #pendingTranslationFilesRequest: any = {};

    static async #getTranslationFile(filePath: any) {
        if (this.#fetchedTranslationFiles[filePath] === null)
            return null;
        if (this.#fetchedTranslationFiles[filePath] !== undefined) {
            return this.#fetchedTranslationFiles[filePath];
        }

        if (this.#pendingTranslationFilesRequest[filePath]) {
            return await this.#pendingTranslationFilesRequest[filePath];
        }

        let resolveCallback: any = null;
        this.#pendingTranslationFilesRequest[filePath] = new Promise((resolve) => { resolveCallback = resolve; });

        const data = await fetch(filePath);
        try {
            const json = await data.json();
            this.#fetchedTranslationFiles[filePath] = json;
            resolveCallback?.(json);
            return json;
        } catch {
            this.#fetchedTranslationFiles[filePath] = null;
            resolveCallback?.(null);
            return null;
        }
    }

    static #getFilePath(language: any, file: any) {
        return `${this.#getTranslationFilesRootFolder()}/${language}/${file}.json`
    }

    static #sanitizeLanguageCode(code: any) {
        if (!code) return null;
        if (code.length > 2) code = code.split("-")[0];
        if (code.length > 2) code = code.substring(0, 2);
        return code.toLowerCase();
    }

    static #getTranslationFilesRootFolder() {
        return this.#translationFilesRootFolder;
    }

    static #getFallbackLanguageCode() {
        return this.#fallbackLanguageCode;
    }

    static #setSavedLanguageCode(code: any) {
        if (!code) localStorage.removeItem("lang");
        else localStorage.setItem("lang", code);
        this.#onlanguageChangeEvents.forEach((callback: any) => callback(code));
    }

    static #getSavedLanguageCode() {
        return localStorage.getItem("lang") ?? null;
    }

    static #retreiveBrowserLanguageCode() {
        this.#setBrowserLanguageCode(this.#sanitizeLanguageCode(navigator.language))
    }

    static #getBrowserLanguageCode() {
        if (!this.#browserLanguageCode)
            this.#retreiveBrowserLanguageCode();
        return this.#browserLanguageCode;
    }

    static #setBrowserLanguageCode(code: any) {
        this.#browserLanguageCode = code;
    }

    static #getFormatedText(text: any, format: any) {
        if (!format) return text;
        for (const key in format) {
            if (text.includes(`{${key}}`))
                text = text.replace(`{${key}}`, format[key]);
        }
        return text;
    }

    static #processTranslation(translation: any) {
        if (typeof translation === "string") return translation;
        if (Array.isArray(translation)) return translation.join("\n");
        return JSON.stringify(translation);
    }

    static getLanguages() {
        return [
            { value: "en", name: "English" },
            { value: "fr", name: "Français" },
            { value: "",   name: "Auto"}
        ];
    }

    static getLanguage() {
        return this.#getSavedLanguageCode() ?? this.#getBrowserLanguageCode() ?? this.#getFallbackLanguageCode();
    }

    static setLanguage(value: any) {
        this.#setSavedLanguageCode(this.#sanitizeLanguageCode(value));
    }

    static registerOnLanguageChange(callback: any) {
        this.#onlanguageChangeEvents.push(callback);
    }

    static async TranslateAsync(context: any) {
        if (!this.isValidContext(context)) {
            console.error("Invalid translation context : ", context);
            return null;
        }

        const filePath = this.#getFilePath(this.getLanguage(), context.file);
        const translationFile = await this.#getTranslationFile(filePath);
        if (translationFile && translationFile[context.code])
            return this.#processTranslation(translationFile[context.code]);

        const fallbackFilePath = this.#getFilePath(this.#getFallbackLanguageCode(), context.file);
        const fallbackTranslationFile = await this.#getTranslationFile(fallbackFilePath);
        if (fallbackTranslationFile && fallbackTranslationFile[context.code])
            return this.#processTranslation(fallbackTranslationFile[context.code]);

        console.error(
            "Translation not found for code [" + context.code + "] in file : [" + context.file + "]\n" +
            "Language : [" + this.getLanguage() + "]\n" +
            "Fallback language : [" + this.#getFallbackLanguageCode() + "]\n" +
            "Translation file : [" + filePath + "]\n" +
            "Fallback translation file : [" + fallbackFilePath + "]\n"
        );
        return null;
    }

    static async GetTextAsync(context: any) {
        if (!context) return null;
        if (typeof(context) === 'string') return context;
        if (typeof(context) === 'number') return context;

        const translation = await this.TranslateAsync(context);
        if (!translation) return null;
        return this.#getFormatedText(translation, context.format);
    }

    static GetText(context: any, callback: any) {
        this.GetTextAsync(context).then(callback);
    }

    static CreateTranslationContext(file: any, code: any, format: any = undefined) {
        return {file, code, format: format ?? undefined};
    }

    static isValidContext(context: any) {
        return context && context.file && context.code;
    }
}