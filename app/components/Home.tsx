"use client";
import { useScrollReveal } from "../hooks/useReveal";

export default function HomeSection() {
  const h1Bud = useScrollReveal({ threshold: 0.05 });
  const h1Pras = useScrollReveal({ threshold: 0.005 });
  const paragraph = useScrollReveal({ threshold: 0.0005 });
  const socialLinkedin = useScrollReveal({ threshold: 0.05 });
  const socialInsta = useScrollReveal({ threshold: 0.005 });
  const socialFb = useScrollReveal({ threshold: 0.0005 });
  const socialEmail = useScrollReveal({ threshold: 0.00005 });
  const socialConnect = useScrollReveal({ threshold: 0.000005 });

  return (
    <section
      className="h-full w-full px-[16vw] justify-center flex flex-col select-none"
      id="home"
    >
      <div className="lg:text-[11em] text-[4em] font-bold mb-[.4em] color-main">
        <h1
          className={`reveal${h1Bud.visible ? " visible" : ""} leading-none tracking-[-4px] lg:tracking-[-8px]`}
          ref={h1Bud.ref}
        >
          Budi
        </h1>
        <h1
          className={`reveal${h1Pras.visible ? " visible" : ""} leading-none tracking-[-4px] lg:tracking-[-8px]`}
          ref={h1Pras.ref}
        >
          Prasetiyo.
        </h1>
      </div>

      <p
        className={`reveal${paragraph.visible ? " visible" : ""} text-sm font-light text-justify color-main mb-[4em]`}
        ref={paragraph.ref}
      >
        Hello, I’am a final-year Software Engineering student with a strong
        passion for building impactful digital solutions as a
        <strong className="color-third"> Full Stack Developer.</strong>{" "}
        Experienced in developing web and mobile applications while continuously
        exploring new technologies to improve both technical and problem-solving
        skills. Beyond programming, highly interested in
        <strong className="color-third">
          photography, design, and outdoor activities
        </strong>
        , which help foster creativity, adaptability, and a balanced perspective
        in both personal and professional environments.
      </p>

      <div className={`flex gap-4 items-center`}>
        <a
          href="https://www.linkedin.com/in/budi-prasetiyo-/"
          target="_blank"
          className={`reveal-right${socialLinkedin.visible ? " visible" : ""} text-sm font-light color-main hover:underline`}
          ref={socialLinkedin.ref}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-8 h-8 inline-block fill-current"
          >
            <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/bbudiipp"
          className={`reveal-right${socialInsta.visible ? " visible" : ""} text-sm font-light color-main hover:underline`}
          ref={socialInsta.ref}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-8 h-8 inline-block fill-current"
          >
            <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/budi.prasetiyo.58958/"
          target="_blank"
          rel="noopener noreferrer"
          className={`reveal-right${socialFb.visible ? " visible" : ""} text-sm font-light color-main hover:underline`}
          ref={socialFb.ref}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-8 h-8 inline-block fill-current"
          >
            <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
          </svg>
        </a>
        <a
          href="mailto:bbudii.prasetiyo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`reveal-right${socialEmail.visible ? " visible" : ""} text-sm font-light color-main hover:underline`}
          ref={socialEmail.ref}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-8 h-8 inline-block fill-current"
          >
            <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
          </svg>
        </a>
        <span
          className={`reveal-right${socialConnect.visible ? " visible" : ""} text-xs font-light`}
          ref={socialConnect.ref}
        >
          Lets connect!
        </span>
      </div>
    </section>
  );
}
