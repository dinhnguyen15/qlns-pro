const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnToggle = $(".sidebar-item-toggle");
const sidebarList = $(".sidebar-list");
const navbarHeader = $(".header__navbar");
const panel = $(".panel");
const btnShowMore = $(".show-more");
const table = $(".form-table");

const app = {
    isToggle: false,

    handleEvents: function(){
        const _this = this;

        // Xử lý ẩn hiện sidebar
        btnToggle.onclick = function() {
            if (_this.isToggle) {
                _this.isToggle = false;
                btnToggle.classList.remove("hide-toggle");
                sidebarList.classList.remove("hide-sidebar");
                navbarHeader.classList.remove("increase-navbar");
                panel.classList.remove("increase-panel");
                table.classList.remove("increase-table");
            } else {
                _this.isToggle = true;
                btnToggle.classList.add("hide-toggle");
                sidebarList.classList.add("hide-sidebar");
                navbarHeader.classList.add("increase-navbar");
                panel.classList.add("increase-panel");
                table.classList.add("increase-table");
            }
        };

        //Xử lý show more task
        btnShowMore.onclick = function() {
            panel.classList.remove("has-showmore");
        };
    },


    start: function(){
        this.handleEvents();
    },
};

app.start();