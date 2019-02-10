export class Heart{
    constructor(
        public full: boolean,
        public heartFullPath: string = '/assets/life_full.png',
        public heartEmptyPath: string = '/assets/life_empty.png'
    ){}

    public heartPath():string{
        return this.full?this.heartFullPath:this.heartEmptyPath;
    }
}