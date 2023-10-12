jQuery(document).ready(function ($) {
  console.log("ready!");
  var w = window.innerWidth;
  if (w < 769) {
    const product = document.querySelector(".product-main");

    if (product) {
      product.classList.add("gu-form");

      const shopContainer = document.querySelector(".shop-container");
      if (shopContainer) {
        var html = `<div class='sticky-variation' id='open-sheet'>
            <div class='gu-add-to-cart gu-item'><svg height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-73.72 -73.72 442.31 442.31" xml:space="preserve" fill="#000000" stroke="#000000" stroke-width="0.00294873"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#a8df8e;" d="M287.373,37.98h-46.046c-8.789,0-17.546,6.626-19.936,15.085l-12.438,44.023 c-1.423-0.396-2.92-0.625-4.478-0.625H99.761c-5.056-22.543-25.217-39.442-49.263-39.442C22.653,57.021,0,79.675,0,107.518 c0,25.479,18.974,46.601,43.532,50.006c-0.011,0.329-0.009,0.661,0.024,0.998l2.61,26.457c0.925,9.373,9.027,16.715,18.446,16.715 h115.462c8.827,0,17.546-6.675,19.85-15.195l14.439-53.397c0.001-0.001,0.001-0.003,0.001-0.003l21.46-75.955 c0.583-2.061,3.359-4.163,5.502-4.163h46.046c4.142,0,7.5-3.357,7.5-7.5S291.515,37.98,287.373,37.98z M15,107.518 c0-19.573,15.924-35.497,35.498-35.497s35.497,15.924,35.497,35.497c0,19.573-15.924,35.497-35.497,35.497S15,127.092,15,107.518z M185.445,182.583c-0.551,2.036-3.262,4.111-5.371,4.111H64.612c-1.646,0-3.356-1.549-3.518-3.188l-2.578-26.135 c22.774-3.65,40.497-22.58,42.31-45.908h103.648c0.072,0,0.137,0.003,0.193,0.007c-0.011,0.056-0.025,0.119-0.044,0.188 L185.445,182.583z"></path> <path style="fill:#a8df8e;" d="M86.504,210.236c-12.863,0-23.328,10.465-23.328,23.328c0,12.863,10.465,23.328,23.328,23.328 c12.863,0,23.329-10.465,23.329-23.328C109.833,220.701,99.367,210.236,86.504,210.236z M86.504,241.892 c-4.592,0-8.328-3.736-8.328-8.328c0-4.592,3.736-8.328,8.328-8.328c4.592,0,8.329,3.736,8.329,8.328 C94.833,238.156,91.096,241.892,86.504,241.892z"></path> <path style="fill:#a8df8e;" d="M160.472,210.236c-12.863,0-23.328,10.465-23.328,23.328c0,12.863,10.465,23.328,23.328,23.328 c12.863,0,23.328-10.465,23.328-23.328C183.8,220.701,173.335,210.236,160.472,210.236z M160.472,241.892 c-4.592,0-8.328-3.736-8.328-8.328c0-4.592,3.736-8.328,8.328-8.328c4.592,0,8.328,3.736,8.328,8.328 C168.8,238.156,165.064,241.892,160.472,241.892z"></path> <path style="fill:#a8df8e;" d="M57.996,126.094v-11.075h11.078c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5H57.996V88.94 c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v11.078H31.921c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h11.075v11.075 c0,4.143,3.358,7.5,7.5,7.5S57.996,130.236,57.996,126.094z"></path> </g> </g></svg></div>
            <div class='gu-buy-now gu-item'><span>Mua ngay</span></div>
        </div>`;
        shopContainer.insertAdjacentHTML("afterbegin", html);

        var sheetHtml = `<div id="sheet" class="column items-center justify-end" aria-hidden="true">
        <div class="overlay"></div>
        <div class="contents column">
          <header class="controls">
            <span class="close-sheet" type="button" title="Close the sheet">&times;</span>
          </header>
          <main class="sheet-variant"></main>
        </div>
      </div>`;
        shopContainer.insertAdjacentHTML("afterbegin", sheetHtml);
        const bodySheet = document.querySelector(".sheet-variant");
        const variationsForm = document.querySelector(".variations_form");
        if (bodySheet && variationsForm) {
          bodySheet.insertAdjacentElement("afterbegin", variationsForm);
        }
      }
    }

    const openSheetButton = document.getElementById("open-sheet");
    const sheet = document.getElementById("sheet");
    if (sheet) {
      const sheetContents = sheet.querySelector(".contents");

      let sheetHeight; // in vh

      const setSheetHeight = (value) => {
        sheetHeight = Math.max(0, Math.min(100, value));
        sheetContents.style.height = `${sheetHeight}vh`;

        if (sheetHeight === 100) {
          sheetContents.classList.add("fullscreen");
        } else {
          sheetContents.classList.remove("fullscreen");
        }
      };

      const setIsSheetShown = (value) => {
        sheet.setAttribute("aria-hidden", String(!value));
      };

      // Open the sheet when clicking the 'open sheet' button
      openSheetButton.addEventListener("click", () => {
        setSheetHeight(Math.min(50, (720 / window.innerHeight) * 100));
        setIsSheetShown(true);
      });

      // Hide the sheet when clicking the 'close' button
      sheet.querySelector(".close-sheet").addEventListener("click", () => {
        setIsSheetShown(false);
      });

      // Hide the sheet when clicking the background
      sheet.querySelector(".overlay").addEventListener("click", () => {
        setIsSheetShown(false);
      });
    }
  }
});
