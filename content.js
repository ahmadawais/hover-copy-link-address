(() => {
	'use strict';

	let hoveredLink = null;

	document.addEventListener('mouseenter', (e) => {
		if (!(e.target instanceof Element)) return;
		const link = e.target.closest('a[href]');
		if (link) hoveredLink = link;
	}, true);

	document.addEventListener('mouseleave', (e) => {
		if (!(e.target instanceof Element)) return;
		const link = e.target.closest('a[href]');
		if (link && link === hoveredLink) hoveredLink = null;
	}, true);

	document.addEventListener('copy', (e) => {
		if (!hoveredLink) return;
		if (window.getSelection().toString()) return;
		e.preventDefault();
		e.clipboardData.setData('text/plain', hoveredLink.href);
	});
})();
