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
		const link = hoveredLink || document.querySelector('a[href]:hover');
		if (!link) return;
		const sel = window.getSelection();
		if (sel.toString() && !link.contains(sel.anchorNode)) return;
		e.preventDefault();
		e.clipboardData.setData('text/plain', link.href);
	});
})();
