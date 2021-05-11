function pickerColor(type: string) {
  switch (type) {
    case "steel": return "#f4f4f4"
    case "fire": return "#FDDFDF"
    case "grass": return "#DEFDE0"
    case "electric": return "#FCF7DE"
    case "water": return "#DEF3FD"
    case "ice": return "#DEF3FD"
    case "ground": return "#f4e7da"
    case "rock": return "#d5d5d4"
    case "fairy": return "#fceaff"
    case "poison": return "#98d7a5"
    case "bug": return "#f8d5a3"
    case "dragon": return "#97b3e6"
    case "psychic": return "#eaeda1"
    case "flying": return "#F5F5F5"
    case "fighting": return "#E6E0D4"
    case "normal": return "#F5F5F5"
    default: return "white"
  };
};

export default pickerColor;