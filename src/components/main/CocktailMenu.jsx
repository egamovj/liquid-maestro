import Image from "next/image";
import style from './cocktailMenu.module.css'

export default async function CocktailMenu() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  const data = await response.json();

  const margaritas = data.drinks || [];

  return (
    <div className={style.menu}>
      <h2 className={style.menuText}>Cocktails Menu</h2>
      <ul className={style.cocktailMenu}>
        {margaritas.map((margarita, index) => (
          <li key={index} className={style.cocktails}>
            <div>
              <Image 
                src={margarita.strDrinkThumb} 
                alt={margarita.strDrink} 
                width={200}
                height={200}/>
            </div>
            <div className={style.description}>
              <div className={style.title}>{margarita.strDrink}</div>
              <div>{margarita.strInstructions}</div>
            </div>
          </li>
        ))}
      </ul>  
    </div>
  );
}