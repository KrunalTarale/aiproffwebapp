import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Article.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faPrint,
  faDownload,
  faSave,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import image1 from "../assets/article.png";
import image2 from "../assets/Article1/graph-1.png";
import image3 from "../assets/Article1/pie1.png";
import image4 from "../assets/Article1/diag1.png";
import image5 from "../assets/Article1/diag2.png";
import image6 from "../assets/Article1/diag3.png";
import image7 from "../assets/Article1/logo.png";
import card1 from "../assets/Article1/card1.png";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Footer from "../Foot/Foot";

const Article = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [progressdropdownVisible, setprogressDropdownVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isDivVisible, setIsDivVisible] = React.useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // check if the target of the click event is not the dropdown or the share icon
      if (
        dropdownVisible &&
        event.target.closest(".share-icon") === null &&
        event.target.closest(".dropdown") === null
      ) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the target of the click event is not the dropdown or the share icon
      if (
        progressdropdownVisible &&
        event.target.closest(".share-icon-progress") === null &&
        event.target.closest(".progress-dropdown") === null
      ) {
        setprogressDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [progressdropdownVisible]);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progressPercentage = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progressPercentage);

      if (imageRef.current && scrollPosition > imageRef.current.offsetHeight) {
        setIsDivVisible(true);
      } else {
        setIsDivVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(false);

  const toggleAudioPlayerVisibility = () => {
    setIsAudioPlayerVisible(!isAudioPlayerVisible);
  };

  return (
    <>
      <Navbar />
      <div className="article">
        <div className=" article space-y-2 mx-auto flex flex-col justify-center">
          <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <img
              ref={imageRef}
              src={image1}
              alt="Generative AI"
              className="w-full object-cover opacity-0"
            />

            <div className="max-w-5xl md:absolute inset-0 flex flex-col justify-center items-center p-6 mx-auto lg:mt-20 lg:pt-12">
              <h1 className="text-4xl md:text-5xl font-semibold mb-2 z-10 text-white leading-relaxed">
                Applied AI: When AI solves real world problems
              </h1>
              <div className="w-full flex justify-start items-center">
                <p className="mt-2 text-slate-100">September 4, 2023</p>
              </div>
            </div>
          </div>

          <div className="mx-auto lg:max-w-7xl flex flex-col justify-center p-16  ">
            <div className="md:flex md:justify-between md:w-4/5 space-y-8 md:space-y-0">
              <div className="underline underline-offset-4">
                <Link to="/">By AiProff</Link>
              </div>
              <button onClick={toggleAudioPlayerVisibility}>Play</button>
              <div className="flex space-x-4">
                <div className="relative">
                  <div
                    className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer share-icon"
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Share</span>
                  </div>
                  {dropdownVisible && (
                    <div className="mt-2 p-4 px-6 absolute left-[-50%] ml-3 border-2 rounded shadow-lg bg-white z-10 chat-bubble dropdown">
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer ">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        Twitter
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className="hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/Synthetic+data+for+enterprises_ebook_2023_August.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Download</span>
                  </div>
                </Link>

                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faSave}
                    className="hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Save</span>
                </div>
              </div>
            </div>

            <div className=" mt-12 text-lg md:text-xl font-light leading-normal space-y-6 md:flex justify-center">
              <div className="flex-grow md:w-4/6 space-y-20 justify-center">
                <div>
                  <div>
                    <p className="">
                      <span className="text-6xl font-bold float-left mr-2">
                        A
                      </span>
                      rtificial Intelligence is a promising technological marvel
                      that holds the key to the future. AI encompasses the
                      ability of machines to perform cognitive tasks such as
                      computer vision, speech recognition, and natural language
                      processing in a human-like manner.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p>
                      {" "}
                      However, the true value of AI is realised when it is
                      applied to real-world scenarios and used to address actual
                      challenges. This is what Applied AI refers to.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p>
                      This is what Applied AI refers to. The importance of
                      Applied AI in the current context is immense.{" "}
                      <a
                        className="text-blue-600 no-underline hover:underline underline-offset-4"
                        href="https://www.gartner.com/en/newsroom/press-releases/2019-01-21-gartner-survey-shows-37-percent-of-organizations-have"
                      >
                        A Gartner survey{" "}
                      </a>{" "}
                      revealed that the number of enterprises adopting AI
                      increased by 270% in the last four years - and remarkably,
                      it tripled in the last year alone!
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold  ">
                      Benefits of Applied AI
                    </h1>
                  </div>
                  <div>
                    <img src={image2} alt="graph-economic-impact" />
                    <p className="text-xs ">
                      AI holds a promising future for economies of G20
                      countries. Source: Accenture & Frontier Economics
                    </p>
                  </div>
                </div>
                <div className="space-y-8 ">
                  <p>
                    AI holds a promising future for economies of G20 countries.
                    Source: Accenture & Frontier Economics Applied AI is the use
                    of artificial intelligence to enhance the efficiency of
                    solving real-world problems. It can involve using AI to
                    automate repetitive tasks and save human resources, using AI
                    to detect patterns that might be missed by human judgement,
                    or using AI to project and anticipate the behaviour of the
                    stock market – the possibilities are limitless.{" "}
                  </p>
                  <p>
                    Over the past few years, AI has transformed a lot. Deep
                    learning, a branch of machine learning that relies on
                    artificial neural networks, has seen tremendous progress in
                    recent years. The availability of large amounts of data,
                    both labelled and unlabeled, the affordability of computing
                    and storage resources, and the improved{" "}
                    <a
                      className="text-blue-600 no-underline hover:underline underline-offset-4"
                      href="https://pytorch.org/blog/quantization-in-practice/"
                    >
                      quantizations technique
                    </a>{" "}
                    in Deep Learning Model – which makes it affordable – are
                    some of the main reasons for the feasible development in
                    Deep Learning
                  </p>
                  <p>
                    The major point of inflection came in 2017, when Google
                    released their famous{" "}
                    <a
                      className="text-blue-600 no-underline hover:underline underline-offset-4"
                      href="https://research.google/pubs/pub46201/"
                    >
                      "Attention is All You Need"
                    </a>{" "}
                    research paper. The paper introduced a new network
                    architecture called the Transformer. Transformers were
                    revolutionary in the fields of Natural Language Processing
                    (NLP), because this new network architecture was based
                    solely on attention mechanisms – which allowed the model to
                    focus on different parts of the input sequence when
                    producing an output. Moreover, Transformers did not use
                    recurrence or convolutions – which are two different types
                    of neural networks used in deep learning, which allows these
                    Transformer models superior in quality, as well as really
                    fast to train.{" "}
                  </p>
                  <p>
                    After the introduction to Transformers, innovations under AI
                    skyrocketed. Companies and enterprises belonging to various
                    industries started adopting AI in their workflow and
                    enterprise – with each of them showing a{" "}
                    <a
                      className="text-blue-600 no-underline hover:underline underline-offset-4"
                      href="https://research.google/pubs/pub46201/"
                    >
                      significant boost in revenue.{" "}
                    </a>{" "}
                  </p>
                </div>
                <div>
                  <img src={image3} alt="graph-economic-impact" />
                  <p className="text-xs ">
                    AI holds a promising future for economies of G20 countries.
                    Source: Accenture & Frontier Economics
                  </p>
                </div>
                <div>
                  <p>
                    In healthcare, AI is being used to analyse medical images
                    with 90% accuracy, aiding in early disease detection. A 2023
                    article in{" "}
                    <a
                      href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10385763/"
                      className="text-blue-600 no-underline hover:underline underline-offset-4"
                    >
                      Innovation in Pharmacy
                    </a>{" "}
                    showed that AI algorithms could potentially condense a
                    typical four or five-year exploratory research into a time
                    span of less than a year. Furthermore, in 2023, a team at
                    MIT developed a new model called{" "}
                    <a
                      href="https://medicaltrend.org/2023/06/11/mit-team-developed-a-chatgpt-like-model-to-accelerate-ai-drug-discovery/"
                      className="text-blue-600 no-underline hover:underline underline-offset-4"
                    >
                      ConPLex
                    </a>{" "}
                    that could predict whether potential drug molecules will
                    interact with specific protein targets, without having to
                    physically conduct tests in the lab. In the field of
                    automobiles, Artificial intelligence (AI) and machine
                    learning (ML) are essential components to achieve the
                    ambitious self-driving cars of the future. Self-driving cars
                    use sensors to gather data from their surroundings, and AI
                    algorithms interpret this data and make calculated
                    decisions.{" "}
                    <a
                      href="https://techcrunch.com/2023/05/04/waymo-doubles-robotaxi-service-area-in-phoenix-in-bid-to-grow-driverless-trips-tenfold/#:~:text=Waymo%20robotaxis%20will%20now%20pick%20up%20and%20drop,to%20grow%20its%20business%20and%20generate%20more%20revenue."
                      className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4 "
                    >
                      Waymo robotaxi
                    </a>
                    – a fully driverless taxi created by parent company Alphabet
                    – is already taking passengers in downtown Phoenix.
                  </p>
                </div>
                <div>
                  <img src={image4} alt="" />
                  <p className="text-xs ">
                    AI would be a catalyst for the development in
                    Self-Autonomous Vehicles. Source:{" "}
                    <a
                      href="https://www.marketsandmarkets.com/Market-Reports/electric-vehicle-market-209371461.html"
                      className="text-blue-600 no-underline hover:underline underline-offset-4 "
                    >
                      Marketsandmarket
                    </a>
                  </p>
                </div>
                <div className="space-y-8">
                  <p>
                    In the domain of security too, AI can be helpful. AI can
                    analyse large amounts of data, network logs, user behaviour,
                    and past malware records, to identify potential malicious
                    behaviour by any system. VentureBeat predicts that AI will
                    boost cybersecurity in 2023 and beyond in many ways, from
                    behavioural analytics to endpoint and patch management. A
                    CNBC report suggests that organisations can leverage the
                    latest AI-based tools to better detect threats and protect
                    their systems and data resources.
                  </p>

                  <p>
                    The trend of relying and using AI in modern enterprise is
                    expected to grow continuously, even intensify in the future.
                    According to an article by McKinsey, Artificial intelligence
                    will be involved in more than 90% of the interactions
                    between brands and customers – either directly or
                    indirectly.
                  </p>
                </div>
                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold  ">
                      The Downfalls of Applied AI
                    </h1>
                  </div>
                  <div>
                    <img src={image5} alt="" />
                  </div>
                </div>
                <div className="space-y-8">
                  <p>
                    Even though the revolutionary field of Artificial
                    Intelligence is presently promising - and it will continue
                    to be promising in the future as well – it has its inherent
                    flaws that shouldn’t be overlooked.{" "}
                  </p>
                  <p>
                    Two of the most challenging issues that these
                    superintelligent machines face are hallucination and
                    algorithmic bias.{" "}
                  </p>
                  <p>
                    Hallucination is when AI apps, such as ChatGPT, create their
                    own facts that are not based on reality. This can lead to
                    misinformation, confusion, and even deception, especially
                    when the AI-generated content is not clearly labelled or
                    verified.
                  </p>
                  <p>
                    Algorithmic bias, on the other hand, refers to the unfair or
                    discriminatory outcomes that an AI system generated due to
                    existing human biases present in the training data. For
                    example, facial recognition systems that fail to recognize
                    people of colour, or hiring algorithms that favour male
                    candidates over female ones.
                  </p>
                </div>
                <div>
                  <img src={image6}></img>
                </div>
                <div>
                  <h1 className="text-4xl font-bold ">
                    How AI works, a brief overview
                  </h1>
                </div>
                <div className="space-y-8">
                  <p>
                    AI is not truly intelligent, but rather imitates human
                    intelligence. This is because AI learns from a specific data
                    set, and its knowledge is bounded by the data that it is
                    exposed to during its training. They do not possess any
                    intelligence of their own.
                  </p>
                  <p>
                    Therefore, AI does not have reasoning abilities; it cannot
                    distinguish between right and wrong, true and false, or
                    biased and unbiased facts. For a machine, all information –
                    regardless of its quality – is simply ‘data’ from the
                    viewpoint of AI.
                  </p>
                  <p>
                    This leads to another problem of AI – it can make biassed
                    conclusions. This depends largely on the quality of the data
                    that is used to train the AI system. If the data is skewed
                    or incomplete, or if the algorithm that runs the AI system
                    has some errors, it could lead to unwanted outcomes.
                  </p>
                  <p>
                    These 'undesirable' outputs can have serious implications
                    for enterprises that rely on large-scale data. For example,
                    CNET, a well-known news outlet, experimented with AI to
                    produce web articles for its website. However, to their
                    disappointment, the news-outlet found errors in more than
                    <a
                      href=""
                      className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4 "
                    >
                      half of its AI-written stories
                    </a>
                    .
                  </p>
                  <p>
                    This undesirable outcome is the result of bad AI deployment
                    and insufficient consideration towards the risks associated
                    with AI
                  </p>
                  <p>
                    Therefore, it is essential for organisations to exercise
                    caution when integrating AI into one's organisation or
                    workflow.
                  </p>
                </div>
                <div>
                  <h1 className="text-4xl font-bold">
                    Predict with Confidence with AiProff
                  </h1>
                </div>
                <div>
                  <img src={image7} />
                </div>
                <div className="space-y-8">
                  <p>
                    As artificial intelligence (AI) becomes more prevalent and
                    influential in the modern world, it is crucial to address
                    its limitations and challenges. To leverage the full
                    potential of AI, one needs to comprehend how the AI model
                    operates and plan the optimal way to integrate it into the
                    organisation, resulting in enhanced efficiency.
                  </p>
                  <p>
                    This is where
                    <a
                      href="#"
                      className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4 "
                    >
                      AiProff
                    </a>
                    can assist you. AiProff is a leading company in the AI
                    domain that enables you to discover the endless
                    opportunities that AI provides. We are a group of skilled
                    experts with a wealth of knowledge and experience in machine
                    learning, artificial intelligence, and data science.{" "}
                  </p>
                  <p>
                    We not only know how to build machine learning models, but
                    also how to detect and prevent their vulnerabilities and
                    biases that can lead to erroneous or harmful outcomes.
                  </p>
                  <p>
                    We excel at creating state-of-the-art solutions as Minimum
                    Viable Products for Enterprises and Academic Institutions to
                    lower the entry barrier – using cutting edge AI/ML solutions
                    – and expedite time to market.
                  </p>
                </div>
              </div>

              <div
                className="ml-8 lg:ml-12 lg:w-3/12 border-y-2 border-black border-b-0 p-4 lg:pl-8 flex flex-col items-start space-y-8"
                style={{ height: "12rem" }}
              >
                <div className="text-2xl font-normal">Downloads</div>

                <div className="flex flex-row text-blue-600 hover:underline underline-offset-4 mb-4 space-x-2">
                  <Link
                    to="https://ingestionpeekai.s3.amazonaws.com/Synthetic+data+for+enterprises_ebook_2023_August.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="space-x-4"
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-base">Full Article</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isDivVisible ? (
          <div className="fixed article top-0 left-0 w-full h-15 bg-white z-50 border-b-4 transition-all duration-500 transform translate-y-0 space-y-2">
            <div className="max-w-3xl lg:max-w-6xl px-8 lg:px-4 md:mx-auto flex justify-center  md:justify-between items-center pt-4">
              <div>
                <h1 className="hidden md:flex text-xl">
                  Applied AI: When AI solves real world problems
                </h1>
              </div>

              <div className="flex space-x-4 ">
                <div className="relative">
                  {" "}
                  <div
                    className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer share-icon-progress"
                    onClick={() =>
                      setprogressDropdownVisible(!progressdropdownVisible)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Share</span>
                  </div>
                  {progressdropdownVisible && (
                    <div className="mt-2 p-4 px-6 absolute left-[-50%] ml-3 border-2 rounded shadow-lg bg-white z-10 chat-bubble progress-dropdown">
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer ">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        Twitter
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/Synthetic+data+for+enterprises_ebook_2023_August.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Download</span>
                  </div>
                </Link>

                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faSave}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Save</span>
                </div>
              </div>
            </div>

            <div
              id="scrollProgress"
              className="h-1 bg-blue-500 transition-all duration-0 "
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        ) : (
          <div className="fixed article top-0 left-0 w-full h-15 bg-white z-50 border-b-4 transition-all duration-500 transform translate-y-[-100%]">
            <div className="max-w-3xl lg:max-w-6xl px-8 lg:px-4 md:mx-auto flex justify-center  md:justify-between items-center pt-4">
              <div>
                <h1 className="hidden md:flex text-xl">
                  Applied AI: When AI solves real world problems
                </h1>
              </div>

              <div className="flex space-x-4 ">
                <div className="relative">
                  {" "}
                  <div
                    className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer share-icon-progress"
                    onClick={() =>
                      setprogressDropdownVisible(!progressdropdownVisible)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Share</span>
                  </div>
                  {progressdropdownVisible && (
                    <div className="mt-2 p-4 px-6 absolute left-[-50%] ml-3 border-2 rounded shadow-lg bg-white z-10 chat-bubble progress-dropdown">
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer ">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        Twitter
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center text-center hover:text-blue-500">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/Synthetic+data+for+enterprises_ebook_2023_August.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Download</span>
                  </div>
                </Link>

                <div className="flex flex-col items-center text-center hover:text-blue-500">
                  <FontAwesomeIcon
                    icon={faSave}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Save</span>
                </div>
              </div>
            </div>

            <div
              id="scrollProgress"
              className="h-1 bg-blue-500 transition-all duration-0 "
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        )}
      </div>

      <div className="bg-slate-100 w-full article">
        <div className="mx-auto flex  justify-center  ">
          <h1 className="text-3xl md:text-4xl font-semibold mt-12">
            Related Articles
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col p-8 ">
          <div className="card hover:bg-white p-5   hover:shadow-lg transition-shadow duration-300">
            <img src={card1} className="rounded-t" alt="Quantum Article" />
            <div className="p-4">
              <p className="text-gray-700 font-bold mb-2">Article</p>
              <h1>
                <a className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4">
                  Shaping the long race in quantum communication and quantum
                  sensing
                </a>
              </h1>
            </div>
          </div>
          <div className="card hover:bg-white p-5   hover:shadow-lg transition-shadow duration-300">
            <img src={card1} className="rounded-t" alt="Quantum Article" />
            <div className="p-4">
              <p className="text-gray-700 font-bold mb-2">Article</p>
              <h1>
                <a className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4">
                  Shaping the long race in quantum communication and quantum
                  sensing
                </a>
              </h1>
            </div>
          </div>
          <div className="card hover:bg-white p-5   hover:shadow-lg transition-shadow duration-300">
            <img src={card1} className="rounded-t" alt="Quantum Article" />
            <div className="p-4">
              <p className="text-gray-700 font-bold mb-2">Article</p>
              <h1>
                <a className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4">
                  Shaping the long race in quantum communication and quantum
                  sensing
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`audio-player-container ${
          isAudioPlayerVisible ? "visible" : "hidden"
        }`}
      >
        <AudioPlayer
          audio="/audiofile.mp3"
          onClose={toggleAudioPlayerVisibility}
        />
      </div>
      <div className="mt-0 pt-4 border-2">
        <Footer />
      </div>
    </>
  );
};

export default Article;
