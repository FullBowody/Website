export function animateShows(page: HTMLElement) {
    if (!page.tagName) return;
    const classes = ["show-up", "show-down", "show-left", "show-right"];
    const elements = [] as { el: HTMLElement, c: string }[];
    classes.forEach(c => {
        const els = page.querySelectorAll("." + c);
        els.forEach((el: any) => {
            if (el.classList.contains("noscroll")) return;
            el.classList.remove(c);
            el.classList.add("opacity-0");
            el.index = elements.length;
            elements.push({ el, c });
        });

        const els2 = page.querySelectorAll(".-" + c);
        els2.forEach((el: any) => {
            if (el.classList.contains("noscroll")) return;
            el.index = elements.length;
            elements.push({ el, c });
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach((e: any) => {
            if (e.isIntersecting) {
                e.target.classList.add(elements[e.target.index].c);
                e.target.classList.remove("-" + elements[e.target.index].c);
                e.target.classList.remove('opacity-0');
            }
            else {
                e.target.classList.remove(elements[e.target.index].c);
                e.target.classList.add("-" + elements[e.target.index].c);
                e.target.classList.add('opacity-0');
            }
        });
    });

    elements.forEach(e => observer.observe(e.el));
}
