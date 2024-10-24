export default class Effects {
  boot() {
    this.contentWaypoint();
  }
  contentWaypoint() {
    $(".element-animate").waypoint(
      function (direction) {
        const $element = $(this.element);
        let effect = $element.data("animate-effect") || "fadeInLeft";

        if (
          direction === "down" &&
          !$(this.element).hasClass("element-animated")
        ) {
          $element
            .removeClass("element-animate")
            .addClass("element-animated " + effect);
        }
      },
      {
        offset: "75%",
      }
    );
  }
}
