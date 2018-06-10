$(window).on("load", sidenVises);

function sidenVises() {

    console.log("Siden Vises");

    $(".menubar").on("click", openNav);
    $(".closebtn").on("click", closeNav)
}

function openNav() {

    console.log("Nav Opens");

    $("#sidenavbar").addClass("open");

}

function closeNav() {

    console.log("Nav Closes");

    $("#sidenavbar").removeClass("open");
}

