export default {
  spaceship(spaceship, obj) {
    const hheight = spaceship.height / 2,
    hwidth = spaceship.width / 2,
    critic_areas = [{
      height: hheight,
      width: spaceship.width - hwidth - 2,
      x: spaceship.x + 1,
      y: spaceship.y + hheight - 1,
    },
    {
      height: hheight,
      width: hwidth - 4,
      x: spaceship.x - 4,
      y: spaceship.y,
    }];
    
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