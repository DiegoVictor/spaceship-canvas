export default {
  wasSpaceshipHitted(spaceship, obj) {
    const hheight = spaceship.height / 2,
    hwidth = spaceship.width / 2,
    critic_areas = [{
      height: hheight,
      x: spaceship.x - hwidth + 1,
      y: spaceship.y + hheight - 1,
      width: spaceship.width - 2
    },
    {
      height: hheight,
      x: spaceship.x - 3,
      y: spaceship.y,
      width: hwidth - 6,
    }
  ];
    
    return !critic_areas.every(area => {
      return !this.verify(area, obj);
    });
  },

  verify(a, b) {
    if ((a.y > b.y && a.y < b.y + b.height) ||
      (a.y + a.height > b.y && a.y + a.height < b.y + b.height)) {

      if ((a.x > b.x && a.x < b.x + b.width) ||
      (a.x + a.width > b.x && a.x + a.width < b.x + b.width)) {
        return true;
      }
    }
    return false;
  }
};