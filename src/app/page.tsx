
import Wrapper from "@/custom-component/wrapper/wrapper";
import style from './main.module.scss';
import CryptoTag from "@/custom-component/crypto-tag/crypto-tag";
import axios from "axios";
import SearchBox from "@/components/search-box/search-box";
import NotFoundUi from "@/components/not-found/not-found-ui";




const getCrypto =  async (cryptoName:string)=>{

  if(cryptoName){
    try{
      const { data , status } = await axios({method: 'get', url: `https://api.coingecko.com/api/v3/coins/${cryptoName}`})
      return {
        status : status,
        name: data.name,
        symbol: data.symbol,
        id: data.id,
        images: data.image
      }
    }catch(e: any){
      if(e.response){
        console.log(e.response.data);
        console.log(e.response.status);
        console.log(e.response.headers);
        return {
          status : e.response.status,
          errorMessage: `There is no result for “${cryptoName}”!`
        }
      }else if(e.request) {
        console.log(e.request)
      }else {
        console.log('Error', e.message);
      }
    }
  }
}

export default  async function getServerSideProps({searchParams}: any) {
  const foundedCrypto = await getCrypto(searchParams.query)
  const  rnderResult= ()=>{

    if(foundedCrypto?.status === 200){
  
      return (
        <CryptoTag id={1234} name={foundedCrypto.name} symbol={foundedCrypto.symbol} cryptoIMG={foundedCrypto.images.large}/>
      )
    }
    if (foundedCrypto?.status === 404){
      return(
        <NotFoundUi meassge={foundedCrypto.errorMessage!}/>
      )
    }
    if(foundedCrypto?.status === 429){
      return <p className={style['too-many']}>Too Many Requests!!</p>
    }

    if(!foundedCrypto){
      return <></>
    }
  }
  return (
    <main className={style['main']}>
      <SearchBox />
      <Wrapper appendStyle={style['search-result']}>
         {
          rnderResult()
         }
      </Wrapper>
    </main>
  );
}
