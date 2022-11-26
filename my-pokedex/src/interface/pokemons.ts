type Request = {
  id: number;
  types: PokemonType[]
}

interface PokemonType {
  type: {
    name: string;
  }
}

type Pokemon = {
  name: string;
  url: string
  id: number
  types: PokemonType[]
}

export { Request, Pokemon, PokemonType };
