class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;
    currentTime: string;
    constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
      this.isOn = on;
      this.volume = Math.min(100, Math.max(0, vol)); 
      this.channel = Math.min(99, Math.max(1, chn)); 
      this.currentTime = new Date().toLocaleTimeString();
    }
    switchOnOff(): void {
      this.isOn = !this.isOn;
      console.log(this.isOn ? "encendido" : "apagado");
    }
    volUp(): void {
        if (this.volume < 100) {
            this.volume++;
            console.log("vol up");
          }
    }
    volDown(): void {
        if (this.volume > 0) {
            this.volume--;
            console.log("vol down");
          }
    }
    channelUp(): void {
        if (this.channel < 99) {
            this.channel++;
            console.log("channel up");
          }
    }
    channelDown(): void {
        if (this.channel > 1) {
            this.channel--;
            console.log("channel down");
          }
    }
    pickChannel(channel: number): void {
        if (!this.isOn) return;
        this.channel = Math.min(99, Math.max(1, channel)); 
        console.log("Cambiaste al canal", this.channel);
      }
    info(): void {
        console.log("Canal:", this.channel, "Volumen:", this.volume, "Hora actual:", this.currentTime);
    }
  }
  
  const tv01 = new Televisor();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.pickChannel(45);
tv01.volUp();
tv01.channelUp();
tv01.info();