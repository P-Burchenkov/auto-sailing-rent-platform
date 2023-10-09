import Card from 'components/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams } from 'react-router-dom';
import { fetchAllAdverts, fetchMoreAdverts } from 'redux/adverts/operations';
import { selectAllAdverts, selectHasMore } from 'redux/adverts/selectors';

import Grid from 'components/Grid';
import ButtonText from 'components/ButtonText';

const CatalogPage = () => {
  const [page, setPage] = useState(2);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  const onLoadMore = () => {
    setPage(prev => prev + 1);
    const searchParams = createSearchParams({ page, limit: 8 }).toString();

    dispatch(fetchMoreAdverts(searchParams));
  };

  const adverbs = useSelector(selectAllAdverts);
  const hasMore = useSelector(selectHasMore);

  return (
    <>
      <Grid>
        {adverbs.map(adverb => {
          return <Card data={adverb} key={adverb.id} />;
        })}
      </Grid>
      <ButtonText
        type="button"
        title="Load more"
        onClick={onLoadMore}
        margin={{
          top: '100px',
          left: 'auto',
          right: 'auto;',
        }}
        disabled={!hasMore}
      />
    </>
  );
};

export default CatalogPage;
