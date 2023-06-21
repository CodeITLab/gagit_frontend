# Gaggit Frontend

## Folder Structure

- .vscode
- assets
  - css
    - base
    - components
    - pages
    - style.css
    - style.css.map
    - style.scss 
  - js
 index.html

## Folder Structure Explanation

### 1. .vscode

.vscode datoteka je mjesto u koje spremamo tasks.json. 
On nam specifično služi za "buildanje" našeg SCSS koda pritiskom CRTL + SHIFT + B. 
Kada se pritisne ta kombinacija tipki, Visual Studio Code će uzeti sve SCSS skripte i prepisati njihove vrijednosti direktno u style.css datoteku.
**Stoga je bitno da se stilo ne pišu u style.css datoteku**

### 2. CSS

CSS folder će biti naša glavna nakupina css, odnosno SCSS datoteka za stiliziranje web stranice.
Prvenstveno će naš SCSS kod biti podijeljen u više grupa. 

**Base** folder će služiti za resetiranje stilova browsera, u datoteci _reset.scss. 
**Components** će biti folder u kojem ćemo pisati grupne stilove za gumbe, input polja i ostalih komponenata tako da sve definicije za takve elemente imamo na jednom mjestu i ne mora se ponavljati kod. 
**Pages** će biti zaseban folder u kojem ćemo definirati zasebne stilove za zasebne podstranice. Tipa _homepage.scss će sadržavati stilove bitne samo za homepage stranicu, dok će _about.scss imati stilove samo za about stranicu. 
