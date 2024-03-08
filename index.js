document.addEventListener("DOMContentLoaded", function () {
  const furnitureCatalog = [
    {
      id: 1,
      src: "./images/Divan/Divan1.png",
      alt: "divan",
      description: "Mayak Mebel - Divan",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 2,
      src: "./images/Divan/Divan2.png",
      alt: "divan",
      description: "Mayak Mebel - Divan",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 3,
      src: "./images/Divan/Divan3.png",
      alt: "divan",
      description: "Mayak Mebel - Divan",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 4,
      src: "./images/Divan/Divan4.png",
      alt: "divan",
      description: "Mayak Mebel - Divan",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 5,
      src: "./images/Divan/Divan5.png",
      alt: "divan",
      description: "Mayak Mebel - Divan",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "5Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 6,
      src: "./images/Divan/Divan6.png",
      alt: "divan",
      description: "Mayak Mebel - Divan",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "6Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 7,
      src: "./images/Kreslo/Kreslo1.png",
      alt: "kreslo",
      description: "Mayak Mebel - Kreslo",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "7Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 8,
      src: "./images/Kreslo/Kreslo2.png",
      alt: "kreslo",
      description: "Mayak Mebel - Kreslo",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "8Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 9,
      src: "./images/Kreslo/Kreslo3.png",
      alt: "kreslo",
      description: "Mayak Mebel - Kreslo",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "9Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 10,
      src: "./images/Kreslo/Kreslo4.png",
      alt: "kreslo",
      description: "Mayak Mebel - Kreslo",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "10Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 11,
      src: "./images/Kreslo/Kreslo5.png",
      alt: "kreslo",
      description: "Mayak Mebel - Kreslo",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "11Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 12,
      src: "./images/Kreslo/Kreslo6.png",
      alt: "kreslo",
      description: "Mayak Mebel - Kreslo",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "12Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 13,
      src: "./images/MetbexStolu/Stol1.png",
      alt: "MetbexStolu",
      description: "Mayak Mebel - Metbex Stolu",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "13Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 14,
      src: "./images/MetbexStolu/Stol2.png",
      alt: "MetbexStolu",
      description: "Mayak Mebel - Metbex Stolu",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "14Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 15,
      src: "./images/MetbexStolu/Stol3.png",
      alt: "MetbexStolu",
      description: "Mayak Mebel - Metbex Stolu",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "15Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 16,
      src: "./images/MetbexStolu/Stol4.png",
      alt: "MetbexStolu",
      description: "Mayak Mebel - Metbex Stolu",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "16Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 17,
      src: "./images/MetbexStolu/Stol5.png",
      alt: "MetbexStolu",
      description: "Mayak Mebel - Metbex Stolu",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "17Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 18,
      src: "./images/MetbexStolu/Stol6.png",
      alt: "MetbexStolu",
      description: "Mayak Mebel - Metbex Stolu",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "18Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 19,
      src: "./images/QonaqOtagi/QonaqOtagi1.png",
      alt: "QonaqOtagi",
      description: "Mayak Mebel - Qonaq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "19Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 20,
      src: "./images/QonaqOtagi/QonaqOtagi2.png",
      alt: "QonaqOtagi",
      description: "Mayak Mebel - Qonaq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "20Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 21,
      src: "./images/QonaqOtagi/QonaqOtagi3.png",
      alt: "QonaqOtagi",
      description: "Mayak Mebel - Qonaq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "21Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 22,
      src: "./images/QonaqOtagi/QonaqOtagi4.png",
      alt: "QonaqOtagi",
      description: "Mayak Mebel - Qonaq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "22Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 23,
      src: "./images/QonaqOtagi/QonaqOtagi5.png",
      alt: "QonaqOtagi",
      description: "Mayak Mebel - Qonaq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "23Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 24,
      src: "./images/QonaqOtagi/QonaqOtagi6.png",
      alt: "QonaqOtagi",
      description: "Mayak Mebel - Qonaq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "24Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 25,
      src: "./images/Yataq/Yataq1.png",
      alt: "YataqOtagi",
      description: "Mayak Mebel - Yataq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "25Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 26,
      src: "./images/Yataq/Yataq2.png",
      alt: "YataqOtagi",
      description: "Mayak Mebel - Yataq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "26Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 27,
      src: "./images/Yataq/Yataq3.png",
      alt: "YataqOtagi",
      description: "Mayak Mebel - Yataq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "27Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 28,
      src: "./images/Yataq/Yataq4.png",
      alt: "YataqOtagi",
      description: "Mayak Mebel - Yataq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "28Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 29,
      src: "./images/Yataq/Yataq5.png",
      alt: "YataqOtagi",
      description: "Mayak Mebel - Yataq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "29Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
    {
      id: 30,
      src: "./images/Yataq/Yataq6.png",
      alt: "YataqOtagi",
      description: "Mayak Mebel - Yataq Otağı",
      search: "./images/Icons/search.png",
      whiteSearch: "./images/Icons/whiteSearch.png",
      aboutFurniture:
        "30Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,quae.",
      xIcon: "./images/Icons/remove.png",
    },
  ];

  function shuffleArray(array) {
    //random
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledFurnitureCatalog = shuffleArray([...furnitureCatalog]); //random

  let currentPage = 1; //hazirki sehife
  const itemsPerPage = 12; //ekranda maksimum nece sekil olmalidir
  const totalItems = shuffledFurnitureCatalog.length; //sekillerin uzunlugu
  const totalPages = Math.ceil(totalItems / itemsPerPage); //sekillerin uzunlugunu 12-ye bölür ve nece eded sehife yaratmalidirsa onu teyin edir

  // ---------------------filtered----------------------
  function normalizeName(name) {
    const mapping = {
      divan: ["Divan", "divan"],
      kreslo: ["Kreslo", "kreslo"],
      metbexstolu: ["Mətbəx Stolu", "MetbexStolu"],
      qonaqotagi: ["Qonaq Otağı", "QonaqOtagi"],
      yataqotagi: ["Yataq Otağı", "YataqOtagi"],
    };

    const normalized = name.toLowerCase().replace(/\s+/g, "");

    for (const [key, values] of Object.entries(mapping)) {
      if (values.includes(name) || key === normalized) {
        return key;
      }
    }

    return normalized;
  }

  const selectedTypes = JSON.parse(localStorage.getItem("selectedTypes")) || {};

  const selectedTypesKeys = Object.keys(selectedTypes).filter(
    (key) => selectedTypes[key]
  );

  let furnitureItems = [];

  const altToCompare = (item) => item.alt.toLowerCase();

  if (selectedTypesKeys.includes("Hamısı") || selectedTypesKeys.length === 0) {
    furnitureItems = shuffledFurnitureCatalog;
  } else {
    if (selectedTypesKeys.includes("Divan")) {
      furnitureItems = shuffledFurnitureCatalog.filter(
        (item) => altToCompare(item) === "divan"
      );
    }
    if (selectedTypesKeys.includes("Kreslo")) {
      furnitureItems = shuffledFurnitureCatalog.filter(
        (item) => altToCompare(item) === "kreslo"
      );
    }
    if (selectedTypesKeys.includes("Mətbəx Stolu")) {
      furnitureItems = shuffledFurnitureCatalog.filter(
        (item) => altToCompare(item) === normalizeName("Mətbəx Stolu")
      );
    }
    if (selectedTypesKeys.includes("Qonaq Otağı")) {
      furnitureItems = shuffledFurnitureCatalog.filter(
        (item) => altToCompare(item) === normalizeName("Qonaq Otağı")
      );
    }
    if (selectedTypesKeys.includes("Yataq Otağı")) {
      furnitureItems = shuffledFurnitureCatalog.filter(
        (item) => altToCompare(item) === normalizeName("YataqOtagi")
      );
    } else {
    }
  }
  function showCurrentItems() {
    const catalogContainer = document.querySelector(".furniture-catalog");
    catalogContainer.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage; //hazirki sehife * 12
    const end = start + itemsPerPage; //hazirki sehife * 12 + nece sekil olmalidir
    const currentItems = furnitureItems.slice(start, end);
    currentItems.forEach((item) => {
      const listItem = document.createElement("li");
      const catalogHeaderText = document.createElement("div");
      const description = document.createElement("p");
      const imageElement = document.createElement("div");
      const image = document.createElement("img");
      const searchContainer = document.createElement("div");
      const aboutFurniture = document.createElement("p");
      const searchElement = document.createElement("img");
      const searchElementMobileFormat = document.createElement("img");

      imageElement.classList.add("furnitureContainer");
      image.classList.add("furnitureElement");
      searchContainer.classList.add("searchContainer");
      searchElement.classList.add("searchElement");
      searchElementMobileFormat.classList.add("searchElementMobileFormat");
      aboutFurniture.classList.add("aboutFurniture");
      catalogHeaderText.classList.add("catalogHeaderText");

      const bodyElement = document.querySelector("body");
      const searchDialog = document.createElement("div");
      const searchCenter = document.createElement("div");
      const searchDivElement = document.createElement("ul");
      const closeSearchPart = document.createElement("li");
      const informations = document.createElement("li");
      const imageList = document.createElement("div");
      const aboutList = document.createElement("div");
      const xIcons = document.createElement("img");
      const imageInList = document.createElement("img");
      const aboutHeaderTextInList = document.createElement("h2");
      const aboutTextInList = document.createElement("p");

      imageInList.src = item.src;
      xIcons.src = item.xIcon;
      aboutHeaderTextInList.textContent = item.description;
      aboutTextInList.textContent = item.aboutFurniture;

      searchDialog.classList.add("search-dialog");
      searchCenter.classList.add("search-center");
      searchDivElement.classList.add("search-container");
      closeSearchPart.classList.add("close-search-part");
      informations.classList.add("informations");
      imageList.classList.add("image-list");
      xIcons.classList.add("x-icons");
      imageInList.classList.add("image-in-list");
      aboutList.classList.add("about-list");
      aboutHeaderTextInList.classList.add("about-header-text-in-list");
      aboutTextInList.classList.add("about-text-in-list");

      bodyElement.appendChild(searchDialog);
      searchDialog.appendChild(searchCenter);
      searchCenter.appendChild(searchDivElement);
      searchDivElement.appendChild(closeSearchPart);
      searchDivElement.appendChild(informations);
      closeSearchPart.appendChild(xIcons);
      informations.appendChild(imageList);
      informations.appendChild(aboutList);
      imageList.appendChild(imageInList);
      aboutList.appendChild(aboutHeaderTextInList);
      aboutList.appendChild(aboutTextInList);

      searchElement.addEventListener("click", function () {
        searchDialog.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
      xIcons.addEventListener("click", function () {
        searchDialog.style.display = "none";
        document.body.style.overflow = "auto";
      });

      searchElementMobileFormat.addEventListener("click", function () {
        searchDialog.style.display = "flex";
        document.body.style.overflow = "hidden";
      });

      image.src = item.src;
      image.alt = item.alt;
      searchElement.src = item.search;
      searchElementMobileFormat.src = item.whiteSearch;
      aboutFurniture.textContent = item.aboutFurniture;
      description.textContent = item.description;

      searchContainer.appendChild(aboutFurniture);
      searchContainer.appendChild(searchElement);
      imageElement.appendChild(image);
      imageElement.appendChild(searchContainer);
      listItem.appendChild(imageElement);
      listItem.appendChild(catalogHeaderText);
      catalogHeaderText.appendChild(description);
      catalogHeaderText.appendChild(searchElementMobileFormat);
      catalogContainer.appendChild(listItem);
    });
  }

  function updateButtonStyles() {
    const nextPageButton = document.getElementById("nextPage");
    const prevPageButton = document.getElementById("prevPage");

    const totalPages = Math.ceil(furnitureItems.length / itemsPerPage);

    if (currentPage >= totalPages) {
      nextPageButton.style.opacity = "0.5";
      nextPageButton.disabled = true;
    } else {
      nextPageButton.style.opacity = "1";
      nextPageButton.disabled = false;
    }
    if (currentPage <= 1) {
      prevPageButton.style.opacity = "0.5";
      prevPageButton.disabled = true;
    } else {
      prevPageButton.style.opacity = "1";
      prevPageButton.disabled = false;
    }
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function changePage(newPage) {
    currentPage = newPage;
    showCurrentItems();
    updateButtonStyles();
    document.getElementById("currentPage").textContent = currentPage.toString();
  }
  document.getElementById("nextPage").addEventListener("click", function () {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
      scrollToTop();
    }
  });
  document.getElementById("prevPage").addEventListener("click", function () {
    if (currentPage > 1) {
      changePage(currentPage - 1);
      scrollToTop();
    }
  });
  showCurrentItems();
  updateButtonStyles();
  //   ---------------------------slider----------------------------------
  const sliderContainer = document.querySelector(".slider-container");
  shuffledFurnitureCatalog.map((item) => {
    const sliderImages = document.createElement("img");
    sliderImages.classList.add("slider-image");
    sliderImages.style.width = "300px";
    sliderImages.src = item.src;
    sliderImages.alt = item.alt;
    sliderContainer.appendChild(sliderImages);
  });
  function cloneFirstToLast() {
    const firstItem = sliderContainer.firstElementChild.cloneNode(true);
    sliderContainer.appendChild(firstItem);
    sliderContainer.removeChild(sliderContainer.firstElementChild);
  }
  function autoScroll() {
    const containerWidth = sliderContainer.offsetWidth;
    const contentWidth = sliderContainer.scrollWidth;
    let scrollLeft = sliderContainer.scrollLeft;
    scrollLeft += 2;
    sliderContainer.scrollLeft = scrollLeft;
    if (scrollLeft + containerWidth >= contentWidth - 2) {
      cloneFirstToLast();
      sliderContainer.scrollLeft -= 300;
    }
  }
  function startAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, 30);
  }
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }
  startAutoScroll();
  sliderContainer.addEventListener("mouseenter", stopAutoScroll);
  sliderContainer.addEventListener("mouseleave", startAutoScroll);
});
// ---------------------contactDialog---------------------
const contactDialog = document.querySelector(".contact-dialog");
function openDialog() {
  contactDialog.style.display = "flex";
  document.body.style.overflow = "hidden";
  typesDialog.style.display = "none";
  document.body.style.overflow = "unset";
}
function closeDialog() {
  contactDialog.style.display = "none";
  document.body.style.overflow = "unset";
}
// -----------------------typesDialog---------------------------
document.addEventListener("DOMContentLoaded", function () {
  const typesChechked = document.querySelectorAll(".types-chechked");

  typesChechked.forEach((div) => {
    div.addEventListener("click", function () {
      const checkbox = div.querySelector("input[type='checkbox']");
      if (!checkbox.checked) {
        typesChechked.forEach((otherDiv) => {
          const otherCheckbox = otherDiv.querySelector(
            "input[type='checkbox']"
          );
          otherCheckbox.checked = false;
          otherDiv.style.backgroundColor = "";
        });
        checkbox.checked = true;
        div.style.backgroundColor = "rgb(244, 153, 26)";
      } else {
        checkbox.checked = false;
        div.style.backgroundColor = "";
      }
    });
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", function () {
    closeTypes();
    const formData = {};
    typesChechked.forEach((div) => {
      const checkbox = div.querySelector("input[type='checkbox']");
      const label = div.querySelector("p").innerText;
      formData[label] = checkbox.checked;
    });
    localStorage.setItem("selectedTypes", JSON.stringify(formData));
  });
});
const typesDialog = document.querySelector(".types-dialog");
function openTypes() {
  if (typesDialog.style.display !== "flex") {
    typesDialog.style.display = "flex";
    document.body.style.overflow = "hidden";
    const typesChecked = document.querySelectorAll("input[type='checkbox']");
    typesChecked.forEach((checkbox) => {
      checkbox.checked = false;
    });
  } else {
    typesDialog.style.display = "none";
    document.body.style.overflow = "unset";
    const typesCheckedDivs = document.querySelectorAll(".types-chechked");
    typesCheckedDivs.forEach((div) => {
      div.style.backgroundColor = "";
    });
  }
}

function closeTypes() {
  typesDialog.style.display = "none";
  document.body.style.overflow = "unset";
  const typesCheckedDivs = document.querySelectorAll(".types-chechked");
  typesCheckedDivs.forEach((div) => {
    div.style.backgroundColor = "";
  });
}
