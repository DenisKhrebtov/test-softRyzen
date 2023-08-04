import {
  Item,
  DeleteButton,
  EditLink,
  TagList,
  ButtonWrapper,
  InfoWrapper,
  ImageWrapper,
  Tag,
} from './EventDetailItem.styled';

const EventDetailItem = () => {
  return (
    <Item>
      <ImageWrapper>
        <img src="/images/dummy.jpg" alt="photo" />
      </ImageWrapper>
      <InfoWrapper>
        <p>
          Discover an enchanting evening celebrating the world of art at our exclusive gallery
          opening.
        </p>
        <TagList>
          <Tag>Art</Tag>
          <Tag priority={'High'.toLowerCase()}>High</Tag>
          <Tag>Kyiv</Tag>
          <Tag>12.07 at 12:00 am</Tag>
        </TagList>
        <ButtonWrapper>
          <EditLink>Edit</EditLink>
          <DeleteButton>Delete event</DeleteButton>
        </ButtonWrapper>
      </InfoWrapper>
    </Item>
  );
};

export default EventDetailItem;
