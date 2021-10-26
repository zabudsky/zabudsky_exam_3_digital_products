window.onload = function () {
	var a;
    a=document.getElementById('first');
	a.onmouseover = function(e) {
		document.getElementById('tab-one').classList.remove('contact__tab--pos');
 }
	a.onmouseout = function(e) {
		document.getElementById('tab-one').classList.add('contact__tab--pos');
};
  }

  var b;
  b=document.getElementById('second');
  b.onmouseover = function(e) {
	  document.getElementById('tab-two').classList.remove('contact__tab--pos');
}
  b.onmouseout = function(e) {
	  document.getElementById('tab-two').classList.add('contact__tab--pos');
};


  
	var linkNav = document.querySelectorAll('[href^="#heading"]'),
    V = 1;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault();
        var w = window.pageYOffset, 
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}

var linkNav = document.querySelectorAll('[href^="#home"]'),
V = 1;
for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function(e) { 
	e.preventDefault();
	var w = window.pageYOffset, 
		hash = this.href.replace(/[^#]*(.*)/, '$1');
	t = document.querySelector(hash).getBoundingClientRect().top,
		start = null;
	requestAnimationFrame(step);
	function step(time) {
		if (start === null) start = time;
		var progress = time - start,
			r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		window.scrollTo(0,r);
		if (r != w + t) {
			requestAnimationFrame(step)
		} else {
			location.hash = hash 
		}
	}
}, false);
}

var linkNav = document.querySelectorAll('[href^="#about"]'),
V = 1;
for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function(e) { 
	e.preventDefault();
	var w = window.pageYOffset, 
		hash = this.href.replace(/[^#]*(.*)/, '$1');
	t = document.querySelector(hash).getBoundingClientRect().top,
		start = null;
	requestAnimationFrame(step);
	function step(time) {
		if (start === null) start = time;
		var progress = time - start,
			r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		window.scrollTo(0,r);
		if (r != w + t) {
			requestAnimationFrame(step)
		} else {
			location.hash = hash 
		}
	}
}, false);
}

var linkNav = document.querySelectorAll('[href^="#services"]'),
V = 1;
for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function(e) { 
	e.preventDefault();
	var w = window.pageYOffset, 
		hash = this.href.replace(/[^#]*(.*)/, '$1');
	t = document.querySelector(hash).getBoundingClientRect().top,
		start = null;
	requestAnimationFrame(step);
	function step(time) {
		if (start === null) start = time;
		var progress = time - start,
			r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		window.scrollTo(0,r);
		if (r != w + t) {
			requestAnimationFrame(step)
		} else {
			location.hash = hash 
		}
	}
}, false);
}

var linkNav = document.querySelectorAll('[href^="#works"]'),
V = 1;
for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function(e) { 
	e.preventDefault();
	var w = window.pageYOffset, 
		hash = this.href.replace(/[^#]*(.*)/, '$1');
	t = document.querySelector(hash).getBoundingClientRect().top,не
		start = null;
	requestAnimationFrame(step);
	function step(time) {
		if (start === null) start = time;
		var progress = time - start,
			r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		window.scrollTo(0,r);
		if (r != w + t) {
			requestAnimationFrame(step)
		} else {
			location.hash = hash 
		}
	}
}, false);
}

var linkNav = document.querySelectorAll('[href^="#contact"]'),
V = 1;
for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function(e) { 
	e.preventDefault();
	var w = window.pageYOffset, 
		hash = this.href.replace(/[^#]*(.*)/, '$1');
	t = document.querySelector(hash).getBoundingClientRect().top,
		start = null;
	requestAnimationFrame(step);
	function step(time) {
		if (start === null) start = time;
		var progress = time - start,
			r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		window.scrollTo(0,r);
		if (r != w + t) {
			requestAnimationFrame(step)
		} else {
			location.hash = hash 
		}
	}
}, false);
} 





