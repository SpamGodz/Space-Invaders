class SpaceInvadersGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  start() {
    this.drawBackground();
    this.drawPlayer();
    this.drawInvaders();
  }

  drawBackground() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawPlayer() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(375, 550, 50, 50);
  }

  drawInvaders() {
    for (let i = 0; i < 10; i++) {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(i * 50, 50, 50, 50);
    }
  }
}

export { SpaceInvadersGame };
