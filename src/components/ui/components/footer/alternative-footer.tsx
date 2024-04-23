// import { component$ } from '@builder.io/qwik';
import { Facebook } from "./../icons/facebook";
import { Instagram } from "./../icons/instagram";
import { Tiktok } from "./../icons/tiktok";
import { Twitter } from "./../icons/twitter";
import Image from "next/image";
import styles from "./footer.module.css";
// import Logo from '~/components/primitives/logo/logo';
// import { Instagram } from '../icons/instagram';
// import { Twitter } from '../icons/twitter';
// import { Facebook } from '../icons/facebook';
// import { Tiktok } from '../icons/tiktok';
// import { Link, useNavigate } from '@builder.io/qwik-city';

export const AlternativeFooter = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-top"]}>
        <div className={styles["footer-top-first"]}>
          <div className={styles["logo"]}>
            <Image src="/logo.png" width="80" height="80" alt="logo" />
          </div>
          <div className={styles["social"]}>
            <span
              style={{
                color: "white",
              }}
            >
              <Instagram />
            </span>
            <span>
              <Twitter />
            </span>
            <span>
              <Facebook />
            </span>
            <span>
              <Tiktok />
            </span>
          </div>
        </div>
        <div className={styles["footer-top-second"]}>
          <div
            style={{
              color: "white",
            }}
            className={styles["footer-top-second-header"]}
          >
            Company
          </div>
          <div className={styles["footer-top-second-content"]}>
            <div>About</div>
            <div>FAQ</div>
          </div>
        </div>
        {/* <div class={styles["footer-top-thirt"]}>
          <div class={styles["footer-top-thirt-header"]}>Artists</div>
          <div class={styles["footer-top-thirt-content"]}>
            <div
              style={{
                cursor: "pointer",
              }}
              onClick$={() => nav("/how-we-work")}
            >
              How We Works
            </div>
            <div>Shop Benefits</div>
          </div>
        </div> */}
        <div className={styles["footer-top-four"]}>
          <div
            style={{
              color: "white",
            }}
            className={styles["footer-top-four-header"]}
          >
            Contact
          </div>
          <div className={styles["footer-top-four-content"]}>
            contact@merchlife.com
            <div>+1 408-835-0739</div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            height: "128px",
          }}
        >
          <div
            style={{
              padding: "16px 16px",
              display: "grid",
              backgroundColor: "transparent",
              color: "white",
              gridTemplateColumns: "1fr 72px",
              gap: "8px",
              borderRadius: "16px",
              height: "32px",
            }}
          >
            <input
              style={{
                padding: "4px 8px",
                borderRadius: "8px",
                fontSize: "14px",
              }}
              type="email"
              placeholder="email"
            />
            <div
              style={{
                cursor: "pointer",
                padding: "4px 8px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "12px",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Suscribe
            </div>
          </div>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <div className={styles["footer-bottom-left"]}>
          Copyright © 2023 Merchlife. All Rights Reserved.
        </div>
        <div className={styles["footer-bottom-right"]}>
          <div className={styles["terms-of-service"]}>Terms of Service</div>
          <div className={styles["privacy-policy"]}>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};
