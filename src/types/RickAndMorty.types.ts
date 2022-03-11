export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResourceBase {
  id: number;
  name: string;
  url?: string;
  created?: string;
}

export interface Endpoints {
  character: string;
  location: string;
  episode: string;
}

export interface CharacterFilter {
  name?: string;
  type?: string;
  species?: string;
  /**
   * 'Dead' | 'Alive' | 'unknown'
   */
  status?: string;
  /**
   * 'Female' | 'Male' | 'Genderless' | 'unknown'
   */
  gender?: string;
  page?: number;
}

export interface LocationFilter
  extends Pick<CharacterFilter, "name" | "type" | "page"> {
  dimension?: string;
}

export interface EpisodeFilter extends Pick<CharacterFilter, "name" | "page"> {
  /**
   * Filter by the given episode code.
   * i.e: `{ episode: "S01E01" }`
   */
  episode?: string;
}

export interface Character extends ResourceBase {
  id: number;
  status: "Dead" | "Alive" | "unknown";
  species?: string;
  type?: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin?: CharacterLocation;
  location?: CharacterLocation;
  image: string;
  episode: string[];
}

export interface Location extends ResourceBase {
  type: string;
  dimension: string;
  residents: Character[];
}

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  character: string[];
}

export interface Info {
  /**
   * The API will automatically paginate the responses. You will receive up to `20` documents per page.
   */
  info?: {
    /** The length of the response */
    count: number;
    /** The amount of pages */
    pages: number;
    /** Link to the next page (if it exists) */
    next: string | null;
    /** Link to the previous page (if it exists) */
    prev: string | null;
  } | null;
}
