'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import './css/main.scss'
import Modal from "./components/Modal/Modal";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSectionFiveVisible, setIsSectionFiveVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionFour = document.querySelector('.section_four');
      const sectionSeven = document.querySelector('.section_seven');

      if (!sectionFour || !sectionSeven) return;

      const sectionFourTop = sectionFour.getBoundingClientRect().top;
      const sectionSevenBottom = sectionSeven.getBoundingClientRect().bottom;

      // Kondisi: tampilkan section_five ketika sudah melewati section_four, 
      // dan sembunyikan ketika section_seven mencapai bagian bawah viewport
      if (sectionFourTop <= window.innerHeight && sectionSevenBottom > window.innerHeight) {
        setIsSectionFiveVisible(true);
      } else {
        setIsSectionFiveVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div>
      <main>
        <div className="video_box">
          <h1 id="logo">Airworld</h1>
          <video autoPlay muted loop>
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="section_two">
          <div className="stwo_box">
            <h2>We create IP and <br/>gamifications <br/>to</h2>
            <ul>
              <li><span>drive engagement</span></li>
              <li><span>cultivate loyalty</span></li>
              <li><span>generate revenue</span></li>
            </ul>
          </div>
        </div>
        <div className="section_three">
          <div className="sthree_box">
            <div className="sthree_ctr">
              <div className="sthree_img_box">
                <Image src="/images/ocean_park.png" width={200} height={200} alt="Ocean Park" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/maxims.png" width={200} height={200} alt="Maxims" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/hongkong_time_square.png" width={200} height={200} alt="Hongkong Time Square" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/hk.png" width={200} height={200} alt="HK" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/csl_5g.png" width={200} height={200} alt="CSL 5G" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/sino_group.png" width={200} height={200} alt="Sino Group" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/mega_box.png" width={200} height={200} alt="Mega Box" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/moov.png" width={200} height={200} alt="Moov" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/i_media_house.png" width={200} height={200} alt="I Media House" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/plaza_hollywood.png" width={200} height={200} alt="Plaza Hollywood" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/park_n_shop.png" width={200} height={200} alt="Park N Shop" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/metro.png" width={200} height={200} alt="Metro" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/central_market.png" width={200} height={200} alt="Cemntral Market" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/echome.png" width={200} height={200} alt="Echome" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/nba.png" width={200} height={200} alt="NBA" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/fringe_club.png" width={200} height={200} alt="Fringe Club" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/emperor.png" width={200} height={200} alt="Emperor" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/media_asia.png" width={200} height={200} alt="Media Asia" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/9gag.png" width={200} height={200} alt="9 Gag" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/predator.png" width={200} height={200} alt="Predator" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/logitech.png" width={200} height={200} alt="Logitech" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/broadband_network.png" width={200} height={200} alt="Hongkong Broadband Network" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/monster_energy.png" width={200} height={200} alt="Monster Energy" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/gym.png" width={200} height={200} alt="GYM" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/makeitloud.png" width={200} height={200} alt="Make it Loud" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/top.png" width={200} height={200} alt="Top" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/loop_live.png" width={200} height={200} alt="Loop Live" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/dinnoduction.png" width={200} height={200} alt="Dinnoduction" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/cyber_games_arena.png" width={200} height={200} alt="Cyber Games Arena" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/line_friends.png" width={200} height={200} alt="Line Friends" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/iost.png" width={200} height={200} alt="IOST" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/hertz.png" width={200} height={200} alt="Hertz" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/zenox.png" width={200} height={200} alt="Zenox" quality={100} />
              </div>
              <div className="sthree_img_box">
                <Image src="/images/map_protocol.png" width={200} height={200} alt="Map Protocol" quality={100} />
              </div>
            </div>
          </div>
          <div className="cases_btn" onClick={openModal}></div>
        </div>
        <div className="section_four">
          <div className="sfour_box">
            <p>AIR has evolved from a pioneering immersive tech into a regional leader in gamification and loyalty.</p>
            <p>Our journey reflects a commitment to constant innovation and adaptation, anchored by an enduring legacy and up-to-date expertise that sets us apart.</p>
          </div>
        </div>
        {isSectionFiveVisible && (
          <div className="section_five"></div>
        )}
        <div className="section_six">
          <h2>REASONS<br/> TO BELIEVE</h2>
          <div className="ssix_box">
            <div className="ssix_ctr">
            <div className="reasons_box">
              <div className="rb_ctr">
              <span>5</span>
              <p>years in operation.</p>
              </div>
            </div>
            <div className="reasons_box">
              <div className="rb_ctr">
              <span>7</span>
              <p>offices, serving the World from <br/>Dubai, Hong Kong, Indonesia, <br/>Malaysia, Singapore, <br/>Thailand, Vietnam.</p>
              </div>
            </div>
            <div className="reasons_box">
              <div className="rb_ctr">
              <span>3</span>
              <p>R&D Hubs in Indonesia, <br/>Malaysia, Thailand</p>
              </div>
            </div>
            <div className="reasons_box">
              <div className="rb_ctr">
              <span>&gt; 10</span>
              <p>IP and material rights partnerships which includes Bandai, Cocomelon, Disney, Emperor Ent. Group, Hasbro, Lego, Line Friends, Moov, Sanrio, Viu.</p>
              </div>
            </div>
            <div className="reasons_box">
              <div className="rb_ctr">
              <span>63</span>
              <p>data analysts, AI engineers, UI/UX designers, developers, DevOps, animators, creators</p>
              </div>
            </div>
            <div className="reasons_box">
              <div className="rb_ctr">
              <span>&gt; 203</span>
              <p>campaigns and projects <br/>ran to date.</p>
              </div>
            </div>
            <div className="reasons_box">
              <div className="rb_ctr">
              <span>27</span>
              <p>active clients</p>
              </div>
            </div>
            <div className="reasons_box">
              <div className="rb_ctr">
              <span>7</span>
              <p>institution investors <br/>and family offices</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="section_seven">
          <Image className="map" src="/images/maps.png" width={1920} height={1280} alt="" quality={100} />
          <div className="map_point hk">
            <div className="mp_thumb">
              <span>HK</span>
              <div className="mp_detail">
                <div className="mpd_box">
                  Unit G, 7 /F, MG Tower, <br />133 Hoi Bun Road, Kwun Tong,<span>Hong Kong</span>
                </div>
              </div>
            </div>
          </div>
          <div className="map_point th">
            <div className="mp_thumb">
              <span>TH</span>
              <div className="mp_detail">
                <div className="mpd_box">
                51/12 Soi Rong Rian <br />Phong Wet Anuson, Phra Khanong Tai, <br />Phra Khanong, Bangkok 10260<span>Thailand</span>
                </div>
              </div>
            </div>
          </div>
          <div className="map_point vn">
              <div className="mp_thumb">
                  <span>VN</span>
                  <div className="mp_detail">
                      <div className="mpd_box">
                          Aqua 4-SHO6, Vinhomes Goldren River, <br />sô 2 Tôn Ðúc Thǎng P. Bên NghéQuân 1, <br />Ho Chi Minh City, Vietnam, 70000<span>Vietnam</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="map_point my">
              <div className="mp_thumb">
                  <span>MY</span>
                  <div className="mp_detail">
                      <div className="mpd_box">
                          C-G-02, Block C, Perdana Condo Office Suites <br />No.15, Jalan PJU8/1, Damansara Perdana <br />47820 Petaling Jaya, Selangor<span>Malaysia</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="map_point sg">
              <div className="mp_thumb">
                  <span>SG</span>
                  <div className="mp_detail">
                      <div className="mpd_box">
                          20 Collyer Quay, #11-05, <br />Singapore 049319<span>SINGAPORE</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="map_point id">
              <div className="mp_thumb">
                  <span>ID</span>
                  <div className="mp_detail">
                      <div className="mpd_box">
                          Jl. S. Parman Kav. 22-24, <br />Grand Slipi Tower #42C, <br />Kec. Palmerah, DKI Jakarta, 11480<span>Vietnam</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="contact_btn"><Link href="mailto:ray@air-world.io">Contact Us</Link></div>
          <Image className="hero" src="/images/icon_hero.png" width={1000} height={1000} alt="" quality={100} />
        </div>
      </main>
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
