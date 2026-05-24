const inPx = (num) => `${num}px`;

class ScrollRc {
    constructor(element) {
        this.element = element;
        this.rc = 0;

        this.element.classList.remove("scrolling");
    }

    recheck() {
        if (this.rc > 0) {
            this.element.classList.add("scrolling");
        } else {
            this.element.classList.remove("scrolling");
        }
    }

    capture() {
        this.rc++;
        this.recheck();
    }

    release() {
        this.rc--;
        this.recheck();
    }
}

const bodyScroll = new ScrollRc(document.body);

function createScrollbar(scrollbar, container) {
    function reposition() {
        const box = container.getBoundingClientRect();
        const scroll = container.scrollTop;

        scrollbar.style.right = inPx(box.right - box.width);
        scrollbar.style.top = inPx(box.top + scroll);

        const maxScroll = container.scrollHeight;
        const currentHeight = container.clientHeight;
        const scrollbarHeight = (currentHeight / maxScroll) * currentHeight;
        scrollbar.style.height = inPx(scrollbarHeight - 128);
    }

    reposition();
    container.addEventListener("scroll", reposition);

    let isDragging = false;
    scrollbar.addEventListener("pointerdown", () => {
        isDragging = true;
        bodyScroll.capture();
    });

    window.addEventListener("pointermove", (evt) => {
        if (!isDragging) return;
        container.scrollTop += evt.movementY;
    });

    window.addEventListener("pointerup", () => {
        if (!isDragging) return;

        isDragging = false;
        bodyScroll.release();
    });
}

createScrollbar(
    document.getElementById("scrollbar"),
    document.querySelector("main"),
);
