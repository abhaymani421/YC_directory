import type {StructureResolver} from 'sanity/structure'
// here in this files we can decide how to arrange our schemas
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('author').title("Authors"),
      S.documentTypeListItem('startup').title("Startups"),
      S.documentTypeListItem('playlist').title("Playlist"),
    ])
