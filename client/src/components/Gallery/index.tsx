import { RootState } from 'src/store';
import { useAppSelector } from 'src/store/shared';

import Cards from '../Card';
import {
  CardsBox,
  Container,
  LogoContainer,
  Header,
  ButtonLeft,
  ButtonRight,
  Button,
  ButtonContainer,
  Pagination,
} from './styled';

const Gallery = ({
  categories,
  products,
}: {
  categories?: string;
  products?: string;
}) => {
  const data = useAppSelector((state: RootState) => state?.categories);

  const booksData = data;

  return (
    <Container data-testid="Gallery">
      <Header>
        <LogoContainer>
          <span>{categories}</span>
        </LogoContainer>
      </Header>

      <CardsBox>
        {booksData &&
          booksData?.map((book) => (
            <Cards
              key={book?.id}
              id={book?.id}
              name={book?.name}
              category_id={book?.category_id}
              category_name={book?.category_name}
              product_id={book?.product_id}
              product_name={book?.product_name}
            />
          ))}
      </CardsBox>

      {products && (
        <ButtonContainer>
          <Pagination>
            Página <strong>{1}</strong> de <strong>2</strong>
          </Pagination>

          <Button>
            <ButtonLeft />
          </Button>

          <Button>
            <ButtonRight />
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Gallery;
