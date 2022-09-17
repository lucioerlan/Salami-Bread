import { Catalog } from 'src/interfaces/catalog';
import {
  Card,
  BookImg,
  BookInfo,
  BookTitle,
  BookAuthor,
  BookDetails,
  BookSpan,
  BoxInfo,
} from './styled';


const Cards = (props: Catalog) => (
  <Card key={props.id} data-testid="card">
    <BookImg />
    <BoxInfo>
      <BookInfo>
        <BookTitle>{props?.name}</BookTitle>
        <BookAuthor>{props?.category_name}</BookAuthor>
      </BookInfo>

      <BookDetails>
        <BookSpan>{props?.product_name}</BookSpan>
        <BookSpan>{props?.name}</BookSpan>
      </BookDetails>
    </BoxInfo>
  </Card>
  )

export default Cards;
