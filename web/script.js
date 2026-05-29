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
const SCROLLBAR_OFFSET = 16;

function createScrollbar(scrollbar, container) {
    function reposition() {
        const trackHeight = container.scrollHeight;
        const viewHeight = container.clientHeight;
        const scrollbarHeight = (viewHeight / trackHeight) * viewHeight;
        scrollbar.style.height = inPx(scrollbarHeight - SCROLLBAR_OFFSET * 2);

        const box = container.getBoundingClientRect();
        const handleOffset = (container.scrollTop / trackHeight) * viewHeight;
        scrollbar.style.top = inPx(handleOffset + box.top + SCROLLBAR_OFFSET);

        scrollbar.style.right = inPx(box.right - box.width);
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
        const ratio = container.scrollHeight / container.clientHeight;
        container.scrollTop += evt.movementY * ratio;
    });

    window.addEventListener("pointerup", () => {
        if (!isDragging) return;

        isDragging = false;
        bodyScroll.release();
    });

    const resizeObserver = new ResizeObserver(() => reposition());
    resizeObserver.observe(container);
    window.addEventListener("resize", () => reposition());
}

createScrollbar(
    document.getElementById("scrollbar"),
    document.querySelector("main"),
);
