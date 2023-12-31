import React, {useState} from "react";
import MarketPlaceCard from "./MarketPlaceCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery, gql } from "@apollo/client";

const GET_NOTICES = gql`
  query GetNotices($cursor: String) {
    notices(first: 10, after: $cursor) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        payload
        index
        input {
          index
          epoch {
            index
          }
        }
      }
    }
  }
`;

const EchoesList = () => {
  const [noticeEchoes, setNoticeEchoes] = useState([]);
  const [cursor, setCursor] = useState(null);

  // Retrieve notices every 500 ms
  const { loading, error, data } = useQuery(GET_NOTICES, {
    variables: { cursor },
    pollInterval: 500,
  });

  // Check query status
  useEffect(() => {
    if (loading) {
      toast("Loading Query Server results", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (error) {
      toast("Error querying Query Server", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error(`Error querying Query Server : ${JSON.stringify(error)}`);
    }
  });

  // Check query result
  const length = data?.notices?.nodes?.length;
  if (length) {
    // Update cursor so that next GraphQL poll retrieves only newer data
    setCursor(data.notices.pageInfo.endCursor);
  }

  // Render new echoes
  const newEchoes = data?.notices?.nodes?.map((node) => {
    // Render echo from notice
    const data = ethers.utils.toUtf8String(node.payload);
    console.log(`Detected : ${data}`);

    return <MarketPlaceCard key={`${node.id}`} data={data} />;
  });

  // Concat new echoes with previous ones
  let ret = noticeEchoes;
  if (newEchoes && newEchoes.length) {
    // Add new rendered echoes to stored data
    ret = noticeEchoes.concat(newEchoes);
    setNoticeEchoes(ret);
  }
  return ret;
};

const MarketPlace = () => {
  return (
    <div id="events" className="min-h-[60vh] bg-[#FFF253] ">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 lg:gap-10 grid-flow-row gap-5 ">
        <EchoesList />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default MarketPlace;
