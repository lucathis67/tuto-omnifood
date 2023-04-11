///////////////////////////////////////////////////////////

// console.log("hello, world");

// const myName = "Lucas Mathis";
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);
// console.log(h1.textContent);

// h1.addEventListener("click", () => {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
// });

///////////////////////////////////////////////////////////
// set current year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

///////////////////////////////////////////////////////////
// mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");

const toggleNav = () => {
  const headerEl = document.querySelector(".header");
  headerEl.classList.toggle("nav-open");
  console.log(headerEl);
  // if (headerEl.className === "header nav-open") {
  //   //headerEl.className = "header";
  //   headerEl.classList.remove("nav-open");
  //   console.log(headerEl);
  // } else {
  //   //headerEl.className = "header nav-open";
  //   headerEl.classList.add("nav-open");
  //   console.log(headerEl);
  // }
};

btnNavEl.addEventListener("click", toggleNav);

///////////////////////////////////////////////////////////
// smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      // const sectionElPosition = document.querySelector(href).offsetTop;
      // window.scrollTo({
      //   top: sectionElPosition,
      //   behavior: "smooth",
      // });
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      toggleNav();
    }
  });
});

///////////////////////////////////////////////////////////
// sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.querySelector("body").classList.add("sticky");
      // document.querySelector(".section-hero").style.marginTop = "9.6rem";
      // const headerHeight = document.querySelector(".header").style.height;
      // console.log(`${headerHeight}`);
    } else {
      document.querySelector("body").classList.remove("sticky");
      // document.querySelector(".section-hero").style.marginTop = "0";
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// fix for flexbox gap in safari

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
