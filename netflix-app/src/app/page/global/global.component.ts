import { NetflixModel, Films } from './models/netflix-model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

public netflixModel:NetflixModel;
public otherFilms:Films;
  constructor() { 
    this.netflixModel={
      nav:{
        title:"Warner Live",
        logo:{
          src:"https://imgur.com/iLoism3.jpg",
          alt:""
        }
      },
      hero:{
        title:"Los cinco mas populares hoy",
        imageGalllery:[
          {
            src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTT1wGzlF9f25CpHiGxk7QHEcW2UqT2j2DFV9QLq7lnUfizOrkVnpu779ZWfQ_mUl8Y-2oTKmDUlt3_wD-_jvrp-ofU1puiwci-TCqZZMxAfB__C4jXuSBEJxWsVbg.webp?r=cd1",
            alt:""
          },
          {
            src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfEuPBL-WkBdmc7V5-JOrj77D33Vy3YiJafZp9f0dqHeChRxMbi0dywCo_D08iPv53cjE74IXaoCtdam7jkNt11G17xXqnuVEoqon40314U0NYqCZJaPkPRwAdxZhA.webp?r=ce9",
            alt:""
          },
          {
            src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfJ2HyRsqyU9HS8N1xI6g7fs5u6PoKocb1iyWe1Gt4OhUVxWbefYHcz9GcZAfwPDfoF6EtRfTK4qZDY8O3t-SpAITUNIo5VEm17_CUOBm1NQ1awz3k39U_1w0uUkEg.webp?r=33e",
            alt:""
          },
          {
            src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbilQC3kGB8eq9hSWMeMMUijIoP6Ni1ZqWRcXVMQjf2dmei2Kf0gaCRbsDQSr8kS6BQrDy2G78U8c-6-y99sAUE2Tr_WR_FME7BtsbVgfh-3_d08ExQmbf-nPglNzsGpt6NCThJ4K2pl8HzOQO5iMWWriyUlzXQ.webp?r=2fa",
            alt:""
          },
          {
            src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZSju8DfiQhyJkurGmMt3OvRcfWkiDqHfvSFgTkxrSuEgKrKnfgXZY0gwX8WYYfk84SPGe13qRiL__PGBfVbpFWRJJ1z5DyLFUhVhuScDa-lufuHKtYYBO_SJBpluA.webp?r=0be",
            alt:""
          }
        ]
      },
      films:{
        title:"Ciencia Ficcion",
        gallery:[
          {
            src:"https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWeatJZS9c3tCWFLL5XJEPXd7BZ9sDMKx1yGClru8csvgTn6it07P-m-NTUbHgtZdhbGI9XMo15BvDqXxOvgottPHeCv_4ubSDQvhXFsnDRvZ9tcChvRPBBG8glp.jpg?r=770",
            alt:""
          },
          {
            src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTX0v8yzSKm-3z1sqO4keodiUhVhvKtznqdrFhWIAeSe0y8fDpLBVcEhiIurckePROyZcb29RzAgZbsS__6qj1gthcw.webp?r=c6a",
            alt:""
          },
          {
            src:"https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcKwQcO7CKeuMSOV4uWq5jihPL4BKKZ0aYhBm2ReWRypZdw5P-SmePDScxGCR3gpUagBU_B3jnSgYIyogPd2LxPUuA8.webp?r=348",
            alt:""
          },
          {
            src:"https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSo__gl28Vu09wUyQkSF_pwKlf38GnDxsJLKkaln-tC3KeT1ULQWqEl72pxGZxEIcSH1eB4qgYuDzDrEAguK58oapTmYB8c4MzP6szXtAB5RBy8MsGJHJ1FF2rDo.jpg?r=a64",
            alt:""
          },
          {
            src:"https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfluTZpv2t1igBL26Y0jCiRGxgj1qVaqhVJ47uJ9pPYq231C50WjSB9kq4XilgLzAr4ItfjSBZKyj2iS-XaGzcQUrPv64zVhXgVYVDPzjvG2NoIkvEKxLqz7F3I2.jpg?r=8cc",
            alt:""
          },
          {
            src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQHq7eKsEPGtZKmobH5e_sbtvbiv9y0RvANAm12skeGdvIEcUQlTQWE5gX5pOOhkk1D6TvA7eyrqNyzRokaWGHuXFKA.webp?r=199",
            alt:""
          },
        ]
      }
    }
    this.otherFilms={
      title:"Accion",
      gallery:[
        {
          src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABedmq2gNU69g2QYntLEEaEda9g0E4I2FpFsXlYKWgu4_YbXPjpD0_fPKjjPjJWuK-U7Xlyg7FDKYpOopYQbCBBkodP1KQ0YxQg4P1bkYTvpFoFwOtmlgud9Ar6y4.jpg?r=8a1",
          alt:""
        },
        {
          src:"https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABddYIsvFHuExc_4GhV1ouKEBPpGoNp2aifXYsR0Y9cAUkjxMcwfEvrPDoRyF9AUydxsEOJVn6wzOnDX59HH6dTgCpeuSKa9ucCb75plWMXNBctts3I6Hl2hqS0pu.jpg?r=15b",
          alt:""
        },
        {
          src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbGc8qfOfNqRMDpkZTG-B7w1CQWe-_oje0nwDm0TYoDPHL5x0yE-UmoRH5SSzrT4XPJDpyAJuj302z92bZp5x1_vhv4.webp?r=a4a",
          alt:""
        },
        {
          src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa75SWJRCJgCE1WA8KcCFfKEO9IfTZhQ4c3PT1IPVrtbfCFDH7Sy7XdBOU8Y4w_YoDxFiFkZTrlz06Rid3wOUDJy49NtocDBMjD4KOBriozCrJTfNV-5_6LO204U.jpg?r=c7c",
          alt:""
        },
        {
          src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRvRzqgorbfuapNvzqPMymqRRaBesFpPzVJx316f9uj6b38V5hJeiVRrS0yOtDTd8aKcRYgynEXRWKLFPWUt5WfGnGk.webp?r=281",
          alt:""
        },
        {
          src:"https://occ-0-3009-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYg9LrfiPd-Jzh9uaQ7_f-JEZTi8PLxRO6Z-9rhSnZY2IcgF_lIzwv7v7Nu1UOxrtBBnVb7e0ZUmqTApje0ljsnJmOw.webp?r=e59",
          alt:""
        },
      ]
    }
  }
  

  ngOnInit(): void {
  }

}
