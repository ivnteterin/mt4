// Swiper

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

const featuresSection = document.querySelector('.mt4-features');

const dotClicks = (dot, scroll, otherDots) => {
	dot.addEventListener('click', () => {
		featuresSection.scrollLeft = scroll;
		addActiveClass(dot, otherDots);
	});
};

const addActiveClass = (dot, otherDots) => {
	dot.classList.add('mt4-features__pager__dot--active');
	otherDots.forEach((dot) => {
		dot.classList.remove('mt4-features__pager__dot--active');
	});
};

dotClicks(dot1, 0, [dot2, dot3]);
dotClicks(dot2, featuresSection.scrollWidth / 4, [dot1, dot3]);
dotClicks(dot3, featuresSection.scrollWidth / 2, [dot1, dot2]);

featuresSection.addEventListener('scroll', () => {
	if (featuresSection.scrollLeft < featuresSection.scrollWidth / 6) {
		addActiveClass(dot1, [dot2, dot3]);
	} else if (featuresSection.scrollLeft < featuresSection.scrollWidth / 3) {
		addActiveClass(dot2, [dot1, dot3]);
	} else {
		addActiveClass(dot3, [dot1, dot2]);
	}
});

featuresSection.scrollLeft = featuresSection.scrollWidth / 4;
