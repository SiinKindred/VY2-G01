import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/home.scss"
import "../assets/css/footer.scss"

const Home: React.FC = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const checkLogin = localStorage.getItem("access_token");
		if (!checkLogin) {
			navigate("/login");
		}
	}, [navigate]);
	return (
		<>   
		<div className='QR-Middle'>
                <img src='https://ik.imagekit.io/tvlk/image/imageResource/2021/12/08/1638962825493-42542d2d34f782eef38517be7e4752ff.png?tr=q-75,w-1280'/>
        </div>
 
        <div className='PromoTab'>
                <div className='Promotab-content'>
                    <h2 style={{color:'rgb(1, 148, 243)'}}>Khuyến mãi được yêu thích</h2>
                </div>
                <div className='Home-Promotab'>
                <div className='Promotab1-content'>
                   <a href='https://www.traveloka.com/vi-vn/promotion/sportfestival'> <img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/05/06/1651836572943-7408307c324ecc15426194ded0f7b058.png?tr=h-150,q-75,w-296 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/05/06/1651836572943-7408307c324ecc15426194ded0f7b058.png?tr=dpr-2,h-150,q-75,w-296 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/05/06/1651836572943-7408307c324ecc15426194ded0f7b058.png?tr=dpr-3,h-150,q-75,w-296 3x'/></a>
                </div>

                <div className='Promotab2-content'>
                   <a href='https://www.traveloka.com/vi-vn/promotion/baylinhhoat'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647503048361-a3928b8284951876f8517363b77e110c.jpeg?tr=h-150,q-75,w-296 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647503048361-a3928b8284951876f8517363b77e110c.jpeg?tr=dpr-2,h-150,q-75,w-296 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/03/17/1647503048361-a3928b8284951876f8517363b77e110c.jpeg?tr=dpr-3,h-150,q-75,w-296 3x'/></a>
                </div>

                <div className='Promotab3-content'>
                <a href='https://www.traveloka.com/vi-vn/promotion/weeksale21'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/05/10/1652165175734-37b207f07a721566c25d6bec4fa27649.png?tr=h-150,q-75,w-296 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/05/10/1652165175734-37b207f07a721566c25d6bec4fa27649.png?tr=dpr-2,h-150,q-75,w-296 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/05/10/1652165175734-37b207f07a721566c25d6bec4fa27649.png?tr=dpr-3,h-150,q-75,w-296 3x'/></a>
                </div>
                </div>
                <br/>
                <br/>
                <div className='Home-Promotab'>
                <div className='Promotab1-content'>
                <a href='https://www.traveloka.com/vi-vn/promotion/trainghiemmoi'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/01/07/1641539009800-25c30296440ef5ee1bf32645dad38ba6.jpeg?tr=h-150,q-75,w-296 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/01/07/1641539009800-25c30296440ef5ee1bf32645dad38ba6.jpeg?tr=dpr-2,h-150,q-75,w-296 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/01/07/1641539009800-25c30296440ef5ee1bf32645dad38ba6.jpeg?tr=dpr-3,h-150,q-75,w-296 3x'/></a>
                </div>

                <div className='Promotab2-content'>
                <a href='https://www.traveloka.com/vi-vn/promotion/datphonggiamgia'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/03/23/1648028786543-1edc5334b1f76c4570efe9c153c5d41b.jpeg?tr=h-150,q-75,w-296 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/03/23/1648028786543-1edc5334b1f76c4570efe9c153c5d41b.jpeg?tr=dpr-2,h-150,q-75,w-296 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/03/23/1648028786543-1edc5334b1f76c4570efe9c153c5d41b.jpeg?tr=dpr-3,h-150,q-75,w-296 3x'/></a>
                </div>
                
                <div className='Promotab3-content'>
                <a href='https://www.traveloka.com/vi-vn/promotion/dulich40'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/01/26/1643184983006-3d71343b73e897c6fbb96d4cd719c4fc.jpeg?tr=h-150,q-75,w-296 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/01/26/1643184983006-3d71343b73e897c6fbb96d4cd719c4fc.jpeg?tr=dpr-2,h-150,q-75,w-296 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/01/26/1643184983006-3d71343b73e897c6fbb96d4cd719c4fc.jpeg?tr=dpr-3,h-150,q-75,w-296 3x'/></a>
                </div>
                </div>
                
            </div>
            <div className='text5'>
                <h2>Traveloka đã được nhắc đến trên</h2>
            </div>

            <div className='khachhangthanquen'>
                <div className='khach1'>
                    <a href='http://www.vecom.vn/hoat-dong/hoat-dong-hoi-vien/ung-dung-dat-phong-khach-san-ve-may-bay-2-trong-1'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075511476-549788d3f233d9fd4f82e56aadaa0699.jpeg?tr=q-75,w-150 1x, https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075511476-549788d3f233d9fd4f82e56aadaa0699.jpeg?tr=dpr-2,q-75,w-150 2x, https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075511476-549788d3f233d9fd4f82e56aadaa0699.jpeg?tr=dpr-3,q-75,w-150 3x'/></a>
                </div>
                <div className='khach2'>
                    <a href='https://cafef.vn/startup-traveloka-dem-cong-nghe-lam-loi-the-canh-tranh-toi-viet-nam-2016082312233614.chn'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075524458-863bf8978027623596b07905b77c3038.jpeg?tr=q-75,w-150 1x, https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075524458-863bf8978027623596b07905b77c3038.jpeg?tr=dpr-2,q-75,w-150 2x, https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075524458-863bf8978027623596b07905b77c3038.jpeg?tr=dpr-3,q-75,w-150 3x'/></a>
                </div>
                <div className='khach3'>
                    <a href='https://thanhnien.vn/mot-trang-web-tim-kiem-da-tro-thanh-start-up-ota-thanh-cong-nhu-the-nao-post594043.html'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075529727-26e887499b15d490d6d8b7fe59254960.png?tr=q-75,w-150'/></a>
                </div>
                <div className='khach4'>
                    <a href='https://www.youtube.com/watch?v=-t8ADLifZRY'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/19/1513667223219-208b4bee6762dda1687818bbfce0c833.png?tr=q-75,w-150'/></a>
                </div>
                <div className='khach5'>
                    <a href='https://www.youtube.com/watch?v=-t8ADLifZRY'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/19/1513667252903-2eee8ba567cfce19f977d58698e00f63.png?tr=q-75,w-150'/></a>
                </div>
            </div>
            <div className='khach6'>
                    <a href='https://startup.vnexpress.net/tin-tuc/y-tuong-moi/ung-dung-dat-phong-thu-hut-7-trieu-nguoi-cua-3-ky-su-cong-nghe-3471218.html'><img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/09/22/1506075535089-95cb6f321f857a1f7a19feb443689a35.jpeg?tr=q-75,w-150'/></a>
                </div> 



				<div className='Footer' style={{backgroundColor:'#000'}}>
               <div className='home-footer-container'>
                   <div className='home-container'>
                         <div className='home1-footer'>
                             <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/86afd0785f5505dd6d584971576dea27.svg'/>
                          </div>
                          <div className='child1-footer'>
                              <img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=h-35,q-75'/>
                           </div>
                   <div className='child1-footer'>
                       <img src='https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=h-35,q-75'/>
                   </div>
                   <div className='child1-footer'>
                       <img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=h-35,q-75'/>
                   </div>
                   <div className='child1-footer'>
                       <img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75'/>
                   </div>
                   <div className='child1-footer'>
                       <img src='https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75'/>
                   </div>
                   <div className='child1-footer'>
                       <img src='https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100'/>
                   </div>
                   </div>

                   <div className='home2-footer'>
                   <div className='link4'>
                       <h3>Về Traveloka</h3>
                   </div>
                   <div className='link4'>
                      <a href='' className='link4'> <h3>Cách đặt chỗ</h3></a>
                   </div>
                   <div className='link4'>
                   <a href='' className='link4'> <h3>Liên hệ chúng tôi</h3></a>
                   </div>
                   <div className='link4'>
                   <a href='' className='link4'> <h3>Trợ giúp</h3></a>
                   </div>
                   </div>
                   <div className='home4-footer'>
                       <div className='link4'>
                             <h3>Theo dõi chúng tôi trên</h3>
                       </div>
                       <div className='link4'>
                            <a href='https://twitter.com/TravelokaVN' className='link4'> <h3><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b5c0e050176153ba05ed1d0ece95c9e2.svg" />Twitter</h3></a>
                       </div>
                       <div className='link4'>
                            <a href='https://www.facebook.com/TravelokaVN' className='link4'> <h3><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/50752125b5a9ef77932df8daaa59c28f.svg" />Facebook</h3></a>
                       </div>
                       <div className='link4'>
                            <a href='https://www.instagram.com/traveloka/' className='link4'> <h3><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7a24301c32be8a7d95db652945f3249.svg" />Instagram</h3></a>
                       </div>
                       <div className='link4'>
                            <a href='https://www.youtube.com/Traveloka' className='link4'> <h3><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/61ba544b71eed91c568993099757aa34.svg" />Youtube</h3></a>
                       </div>
                   </div>

                   <div className='home5-footer'>
                       <div className='link4'>
                           <h3>Tải ứng dụng Traveloka</h3>
                       </div>
                       <div>
                           <a href='https://play.google.com/store/apps/details?id=com.traveloka.android&referrer=adjust_reftag%3DcuVPbvKUOVBfB%26utm_source%3DTraveloka%2BDesktop' className=''><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c90225c14bd4b3b9dc24f1eef7ce6260.svg" /></a>
                       </div>
                       <br/>
                       <div>
                           <a href='https://apps.apple.com/app/id898244857?mt=8' className=''><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/710ae7ca20e600c9c96165ea400042c1.svg" /></a>
                       </div>
                   </div>
               </div>
           </div>
	   </>
		   
	   );
};

export default Home;
