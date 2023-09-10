class GameObject {
  constructor(objectClass, frameList, runVelocity) {
    this.htmlElement = document.createElement('img');
    this.htmlElement.classList.add(objectClass);

    this.frameList = frameList;
    this.animationIntervalReference;
    this.velocity = runVelocity;
    this.frameIndex = 0;

    containerGameEl.appendChild(this.htmlElement);
    this.playAnimation();
  }
  
  getStyles (styleName) {
    return window.getComputedStyle(this.htmlElement)[styleName].replaceAll('px', '');
  }

  setStyles (styleName, value) {
    this.htmlElement.style[styleName] = value;
  }

  playAnimation () {
    this.animationIntervalReference = setInterval(() => {
      this.htmlElement.src = this.frameList[this.frameIndex];
      this.frameIndex = this.frameIndex >= this.frameList.length - 1 ? 0 : this.frameIndex + 1;
    }, this.velocity);
  }

  pauseAnimation () {
    clearInterval(this.animationIntervalReference);
  }
}