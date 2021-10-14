
export interface NetflixModel {
    nav:Nav;
    hero:Hero;
    films:Films;
}

export interface Nav{
    logo:Img;
    title:string;

}

export interface Hero{
    title:string;
    imageGalllery:Img[];
}

export interface Img {
    src: string;
    alt: string;
}

export interface Films{
   title:string;
   gallery:Img[];
}







