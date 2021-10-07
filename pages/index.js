import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fp from 'lodash/fp';
//import { useSession, getSession } from "next-auth/client";
import { useDispatch, useSelector } from 'react-redux';
import { getTest } from '../store/reducers/test/test';
import { useEffect, useRef } from 'react';
import { createSelector } from 'reselect';

const Main = ({ number }) => {
  const dispatch = useDispatch();
  const didLoad = useRef();
  const stateCartSelector = createSelector(
    (state) => state.cartsReducer,
    (cartInfo) => ({
      error: fp.get(`error`, cartInfo),
      isLoading: fp.get(`isLoading`, cartInfo),
      carts: fp.get(`carts`, cartInfo),
      totalPrice: fp.get(`totalPrice`, cartInfo),
    }),
  );
  const stateCart = useSelector(stateCartSelector);
  useEffect(() => {
    if (!didLoad.current) {
      dispatch(getTest())
        .then((res) => {
          const error = fp.get(`error`, res);
          if (error) throw res;
        })
        .catch((err) => {
          alert(err);
        });
      didLoad.current = true;
    }
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Head>
          <title>메인화면</title>
        </Head>
        <Container></Container>
      </Layout>
    </>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {
      number: 0//context.req.session.num === undefined? 0 : context.req.session.num,
    },
  };
}
Main.defaultProps = {
  number: 0,
};
Main.propTypes = {
  number: PropTypes.number,
};
export default Main;
