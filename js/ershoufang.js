(function () {
    function fn() {
        var dom = document.documentElement;
        var wid = dom.getBoundingClientRect().width;
        if (wid > 750) {
            wid = 750;
        }
        var rem = wid / 25;
        dom.style.fontSize = rem + 'px';
    }
    fn();
    window.addEventListener("resize", function () {
        fn();
    }, false)
})();
// 遮罩层
var tit_san = document.getElementsByClassName("tit-san")[0];
// 挂载点id
var select = document.getElementById('select');
var tit_con = document.getElementsByClassName("tit-con");
var select_item = document.getElementsByClassName("select-item");
var tit_content = document.getElementsByClassName("tit-content");
// 控制小三角
var triangleBlue = document.getElementsByClassName('triangleBlue');
var triangleGray = document.getElementsByClassName("triangleGray");
// 区域里面相关数据
var left_p1 = document.getElementsByClassName("left-p1");
var cont2_ul = document.getElementsByClassName("cont2-ul")[0];
var cont2_bot2 = document.getElementsByClassName("cont2-bot2")[0];
new Vue({
    el: "#select",
    data: {
        num: 0,
        num1: 0,
        num2: 0,
        num3: 0,
        num4: null,
        num5: null,
        num6: 0,
        num7: 0,
        num8: 0,
        num9: 0,
        num10: null,
        titles: ["区域", "价格", "房型", "更多", "排序"],
        types: ["满五年", "近地铁", "VR房源", "7日以上"],
        citys: ["区域", "地铁"],
        next_citys: ["不限", "二七", "郑东新区", "荥阳市", "新郑市", "上街区", "巩义市", "新密市", "登封市", "中牟县", "经开区", "高新", "航空港区", "中原", "管城回族区", "惠济区", "金水区"],
        metros: ["不限", "1号线", "2号线", "城郊线", "5号线", "14号线"],
        prices: ["60万以下", "60-80万", "80-100万", "100-150万", "150-200万", "200-300万", "300-400万", "400万以上"],
        house_types: ["一室", "二室", "三室", "四室", "五室", "五室及以上"],
        groups: [{
            areas: ["50m²以上", "50-70m²", "70-90m²", "70-110m²", "110-130m²", "130-150m²", "150-200m²", "200m²以上"],
            features: ["比看好房", "满五年", "满两年", "近地铁", "VR房源", "7日新上", "随时看房", "全景窗台"],
            oris: ["南北", "朝南", "朝东", "朝北", "朝西"],
            floors: ["低楼层", "中楼层", "高楼层"],
            towerages: ["5年以内", "10年以内", "15年以内", "20以内", "20年以外"],
            finish: ["精装修", "普通装修", "毛坯房"],
            use: ["普通住宅", "商业类", "别墅", "四合院", "车位", "其他"],
            lift: ["有电梯", "无电梯"],
            owner: ["商品房", "公房", "经适房", "其他"],
            type: ["塔楼", "板楼", "板塔结合"],
            heating: ["自供暖", "集体供暖"]
        }],
        sorts: ["默认排序", "最新发布", "总价从高到低", "总价从低到高", "单价从高到低", "面积从大到小"]
    },
    methods: {
        select(a) {
            this.num4 = a;
            var m = this.$el.children[0].children;
            this.$el.setAttribute("class", "fle");
            if (tit_con[a].parentElement.classList[1] == "active") {
                this.$el.removeAttribute("class", "fle");
                document.getElementsByTagName("body")[0].style.overflow = "auto"
                triangleGray[a].style.display = "none";
                triangleBlue[a].style.display = "inline-block";
                tit_content[a].style.display = "block";
                tit_san.style.display = "none";
            } else {
                this.$el.setAttribute("class", "fle");
                document.getElementsByTagName("body")[0].style.overflow = "hidden"
                this.$el.children[0].children[a].classList.add("active");
                triangleGray[a].style.display = "inline-block";
                triangleBlue[a].style.display = "none";
                tit_content[a].style.display = "none";
                tit_san.style.display = "block";
            }
            for (var i = 0; i < m.length; i++) {
                m[i].classList.remove('active');
                triangleBlue[i].style.display = "none";
                triangleGray[i].style.display = "inline-block";
                tit_content[i].style.display = "none";
            }
            this.$el.children[1].style.display = "block";
            if (this.$el.classList[0] == "fle") {
                triangleGray[a].style.display = "none";
                triangleBlue[a].style.display = "inline-block";
                select_item[a].classList.add("active")
                tit_content[a].style.display = "block";
            }
            var name0 = this.$el.children[0].children[0].children[0].children[0].innerHTML
            var name1 = this.$el.children[0].children[1].children[0].children[0].innerHTML
            var name2 = this.$el.children[0].children[2].children[0].children[0].innerHTML
            var name3 = this.$el.children[0].children[3].children[0].children[0].innerHTML
            var name4 = this.$el.children[0].children[4].children[0].children[0].innerHTML
            if (name0 != "区域") {
                this.$el.children[0].children[0].children[0].children[0].classList.add("active");
                triangleBlue[0].style.display = "inline-block";
                triangleGray[0].style.display = "none";
            }
            if (name1 != "价格") {
                this.$el.children[0].children[1].children[0].children[0].classList.add("active");
                triangleBlue[1].style.display = "inline-block";
                triangleGray[1].style.display = "none";
            }
            if (name2 != "房型") {
                this.$el.children[0].children[2].children[0].children[0].classList.add("active");
                triangleBlue[2].style.display = "inline-block";
                triangleGray[2].style.display = "none";
            }
            if (this.num9 >= 1) {
                this.$el.children[0].children[3].children[0].children[0].classList.add("active");
                triangleBlue[3].style.display = "inline-block";
                triangleGray[3].style.display = "none";
            }
            if (name4 != "排序") {
                this.$el.children[0].children[4].children[0].children[0].classList.add("active");
                triangleBlue[4].style.display = "inline-block";
                triangleGray[4].style.display = "none";
            }
        },
        city1(a) {
            this.num = a;
        },
        city_next(a) {
            this.num1 = a
            this.num2 = a;
            this.num3 = 0
        },
        change(a, data) {
            this.num3 = a;
            this.titles.splice(this.num4, 1, data);
            document.getElementsByClassName("tit")[0].style.display = "none";
            this.$el.removeAttribute("class");
            tit_san.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflow = "auto"
        },
        // 价格下面的颜色变化
        cont2_ul(a, data) {
            if (this.$el.children[1].children[1].children[0].children[2].children[a].classList[0] == "active2") {
                this.$el.children[1].children[1].children[0].children[2].children[a].classList.remove("active2");
                this.num6--
            } else {
                this.$el.children[1].children[1].children[0].children[2].children[a].classList.add("active2")
                this.num6++
            }
        },
        cont2() {
            tit_san.style.display = "none";
            document.getElementsByClassName("tit")[0].style.display = "none";
            this.$el.removeAttribute("class");
            var a = this.$el.children[1].children[1].children[0].children[2].children
            console.log(a)
            if (this.num6 == 1) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i].classList[0] == "active2") {
                        var name = a[i].innerHTML
                        this.titles.splice(this.num4, 1, name)
                    }
                }
            } else if (this.num6 > 1) {
                this.titles.splice(this.num4, 1, "更多")
            }
            else {
                this.titles.splice(this.num4, 1, "价格");
                this.$el.children[0].children[this.num4].children[0].children[0].classList.remove("active")
            }
            if (this.num6 == 0) {
                this.$el.children[0].children[this.num4].classList.remove("active");
                triangleBlue[this.num4].style.display = "none";
                triangleGray[this.num4].style.display = "inline-block"
            }
            document.getElementsByTagName("body")[0].style.overflow = "auto"
        },
        cont3(index, name) {
            if (this.$el.children[1].children[2].children[0].children[1].children[index].classList[0] == "active2") {
                this.$el.children[1].children[2].children[0].children[1].children[index].classList.remove("active2");
                this.num7--
            } else {
                this.$el.children[1].children[2].children[0].children[1].children[index].classList.add("active2");
                this.num7++
            }
        },
        cont3_btn() {
            tit_san.style.display = "none";
            document.getElementsByClassName("tit")[0].style.display = "none";
            this.$el.removeAttribute("class");
            var a = this.$el.children[1].children[2].children[0].children[1].children;
            if (this.num7 == 1) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i].classList == "active2") {
                        var name = a[i].innerHTML;
                        this.titles.splice(this.num4, 1, name)
                    }
                }
            } else if (this.num7 > 1) {
                this.titles.splice(this.num4, 1, "更多")
            } else {
                this.titles.splice(this.num4, 1, "房型");
                this.$el.children[0].children[this.num4].children[0].children[0].classList.remove("active")
            }
            if (this.num7 == 0) {
                this.$el.children[0].children[this.num4].classList.remove("active");
                triangleBlue[this.num4].style.display = "none";
                triangleGray[this.num4].style.display = "inline-block"
            }
            document.getElementsByTagName("body")[0].style.overflow = "auto"
        },
        more(index) {
            if (event.target.classList[0] == "active2") {
                event.target.classList.remove("active2");
                this.num9--
            } else {
                event.target.classList.add("active2")
                this.num9++
            }
        },
        more_btn() {
            tit_san.style.display = "none";
            document.getElementsByClassName("tit")[0].style.display = "none";
            this.$el.removeAttribute("class");
            console.log(this.num9)
            if (this.num9 == 0) {
                this.$el.children[0].children[this.num4].classList.remove("active")
                this.$el.children[0].children[3].children[0].children[0].classList.remove("active");
                triangleGray[3].style.display = "inline-block";
                triangleBlue[3].style.display = "none";
            }
            document.getElementsByTagName("body")[0].style.overflow = "auto"
        },
        cont5(sort, index) {
            tit_san.style.display = "none";
            this.num10 = index
            for (var i = 0; i < this.$el.children[1].children[this.num4].children[0].children.length; i++) {
                this.$el.children[1].children[this.num4].children[0].children[i].classList.remove("active");
            }
            document.getElementsByClassName("tit")[0].style.display = "none";
            this.$el.removeAttribute("class");
            this.$el.children[1].children[this.num4].children[0].children[this.num10].classList.add("active");
            this.titles.splice(this.num4, 1, sort);
            document.getElementsByTagName("body")[0].style.overflow = "auto"
        },
        // 重置功能
        reset() {
            var a = this.$el.children[1].children[this.num4].children[0].children[2].children;
            for (var i = 0; i < a.length; i++) { 
                a[i].classList.remove("active2");
                this.num6=0
            }
        },
        reset1() {
            var a = this.$el.children[1].children[this.num4].children[0].children[1].children;
            for (var i = 0; i < a.length; i++) { 
                a[i].classList.remove("active2");
                this.num7=0
            }
        },
        reset2() {
            var a = this.$el.children[1].children[this.num4].children[0].children;
            console.log(a) 
            for (var i = 0; i < a.length; i++) { 
                (function (i) { 
                    if (i % 2 == 0) { 
                        var n = i + 1
                        for (var i = 0; i < a[n].children.length; i++) { 
                            // console.log(a[n].children[i])
                            a[n].children[i].classList.remove("active2")
                            this.num9 = 0
                            console.log(this.num9)
                        }
                    }
                   
                })(i)
            }
          
        }
    }
});
// 点击遮罩层
var triangleBlue = document.getElementsByClassName("triangleBlue");
var triangleGray = document.getElementsByClassName("triangleGray");
tit_san.onclick = function () {
    this.previousElementSibling.previousElementSibling.children[1].style.display = "none";
    this.previousElementSibling.previousElementSibling.removeAttribute("class");
    this.style.display = "none";
    var a = this.previousElementSibling.previousElementSibling.children[0].children;
    for (var i = 0; i < a.length; i++) {
        a[i].classList.remove("active");
        if (a[i].children[0].children[0].classList[1] == "active") {
            triangleBlue[i].style.display = "inline-block";
            triangleGray[i].style.display = "none";

        } else {
            triangleBlue[i].style.display = "none";
            triangleGray[i].style.display = "inline-block";
        }
    }
    document.getElementsByTagName("body")[0].style.overflow = "auto"
}
// tab切换下面的类型颜色的变化
var type_item = document.getElementsByClassName("type-item")
for (var i = 0; i < type_item.length; i++) {
    type_item[i].onclick = function () {
        if (this.getAttribute('class') == "type-item") {
            this.setAttribute("class", "type-item1")
        } else {
            this.setAttribute("class", "type-item")
        }
    }
};
var tab_item = document.getElementsByClassName('tab_item')[0];
window.onscroll = function () {
    if (window.scrollY > 125) {
        tab_item.classList.add("top_tab");
        document.getElementsByClassName("tit")[0].style.marginTop = 2.5 + "rem";
        tit_san.classList.add("tit-san1");
    } else { 
        tab_item.classList.remove("top_tab");
        document.getElementsByClassName("tit")[0].style.marginTop = 0;
    }
}
// 请求房子数据
var list = document.getElementById("list");
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/ershoufang", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText)
        // console.log(data.data)
        for (var i = 0; i < data.data.length; i++) {
            list.innerHTML += `
                <li class="list-item" onclick="details(${data.data[i].id})">
                    <div class="lists-left">
                        <img src="${data.data[i].img}">
                    </div>
                    <div class="lists-right">
                        <div class="right-item1">
                        <img src="https://img.ljcdn.com/beike/bikanhaofang/1581996690584.png" class="good">${data.data[i].title}
                    </div>
                    <p class="desc">${data.data[i].desc}<p>
                    <p style="margin-bottom:0.3rem">
                        <span class="price">${data.data[i].price}万</span>
                        <span class="price1">${data.data[i].price1}</span>
                    </p>
                    <p class="rob">
                        <img src="https://img.ljcdn.com/beike/bangdan/1565234456984.png" class="plate">
                        <span>${data.data[i].rob}</span>
                    </p>
                </li>
            `;
        }
    }
}
xhr.send();
function details(id) { 
    window.location.href = "er-details.html?id=" + id
    console.log(id)
}

// 点击底部的tab切换
var tab_item1 = document.getElementsByClassName("tab-item1")[0];
var tab_item2 = document.getElementsByClassName("tab-item2")[0];
var tab_item3 = document.getElementsByClassName("tab-item3")[0];
tab_item1.onclick = function () {
    this.parentElement.nextElementSibling.children[0].style.display = "block";
    this.parentElement.nextElementSibling.children[1].style.display = "none";
    this.parentElement.nextElementSibling.children[2].style.display = "none";
    this.classList.add("tab-item1")
    this.classList.remove("tab-item2")
    tab_item2.classList.add("tab-item2")
    tab_item2.classList.remove("tab-item1")
    tab_item3.classList.add("tab-item2")
    tab_item3.classList.remove("tab-item1")
}
tab_item2.onclick = function () {
    tab_item1.classList.remove("tab-item1")
    tab_item1.classList.add("tab-item2")
    tab_item3.classList.remove("tab-item1")
    tab_item3.classList.add("tab-item2")
    this.classList.remove("tab-item2")
    this.classList.add("tab-item1")
    this.parentElement.nextElementSibling.children[1].style.display = "block";
    this.parentElement.nextElementSibling.children[0].style.display="none";
    this.parentElement.nextElementSibling.children[2].style.display="none";
}
tab_item3.onclick = function () {
    tab_item1.classList.remove("tab-item1")
    tab_item1.classList.add("tab-item2")
    tab_item2.classList.remove("tab-item1")
    tab_item2.classList.add("tab-item2")
    this.classList.remove("tab-item2")
    this.classList.add("tab-item1")
    this.parentElement.nextElementSibling.children[2].style.display = "block";
    this.parentElement.nextElementSibling.children[0].style.display="none";
    this.parentElement.nextElementSibling.children[1].style.display="none";
}


