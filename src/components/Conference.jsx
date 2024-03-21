import React, { useState } from "react";
import DropDowns from "../widgets/DropDowns";

const machineLearningItems = [
  "Algorithms and Models",
  "Feature Engineering",
  "Supervised Learning - Classification, Regression",
  "Unsupervised Learning",
  "Semi-supervised Learning",
  "Association rule Mining",
  "Recommendation System",
  "Spatio Temporal Learning",
  "Time Series Data",
];
const aiDeepLearningItems = [
  "Heuristic Search, nature inspired search",
  "Fuzzy and Rough Set",
  "Reinforcement Learning",
  "ANN and Deep Neural Networks",
  "RNN, CNN, RBM, Transformer",
  "Auto Encoder, GAN, Transfer Learning",
  "Generative AI: Natural Language Processing, Computer Vision, Audio Analytics, Video Analytics, Code Analytics",
  "Application in Computer Vision, Natural Language Processing",
  "AI based on capabilities: Narrow AI, General AI, Super AI",
  "AI based on functionalities: Reactive machine, Limited Mind, Theory of Mind",
  "Other research Issues and Interdisciplinary applications in Science, Social Science and Humanities",
];

const dataEngineeringItems = [
  "Data warehouse and Data Lakes",
  "AI for Database Systems",
  "Data Stream Systems and Edge Computing",
  "Database technology for AI",
  "Explainability, Fairness, and Trust in Data Systems and Analysis",
  "Graphs, Networks, and Semi-Structured Data",
  "Uncertain, Probabilistic, and Approximate Databases",
];

const computerVisionItems = [
  "Image Segmentation and Object Detection",
  "Image Classification and Recognition",
  "Feature Extraction and Description",
  "Deep Learning for Computer Vision",
  "3D Computer Vision and Stereo Vision",
  "Biomedical Image Analysis",
  "Video Analysis and Action Recognition",
  "Object Tracking and Motion Analysis",
  "Applications of Computer Vision",
  "Deepfake Detection and Image Forensics",
  "Multi-modal Fusion and Cross-modal Retrieval",
  "Benchmark Datasets and Evaluation Metrics",
  "Hardware and Embedded Vision Systems",
];
const nlpItems = [
  "Neural Architectures for Natural Language Processing",
  "Multimodal NLP",
  "Ethical and Societal Implications of NLP",
  "Dialogue Systems and Conversational Agents",
  "Machine Translation and Multilingual NLP",
  "Knowledge Representation and Reasoning",
  "Text Generation and Summarization",
  "Semantic Analysis and Understanding",
  "Information Retrieval and Question Answering",
  "Domain-Specific Applications",
  "Evaluation Metrics and Benchmarking",
  "Text-to-speech and speech-to-text technologies",
  "Intelligent tutoring systems",
];

const Conference = () => {
  return (
    <div className="px-6 bg-blue-100 my-10 max-w-7xl w-full font-main">
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-balance  text-center">
        Conference Topics
      </h1>
      <div className="flex justify-center gap-3 items-center pl-4">
        <hr className="w-1 h-2   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-2   bg-blue-500 border-0 rounded  " />
        <hr className="w-1 h-2  bg-blue-500 border-0 rounded  " />
        <hr className="w-36 h-2   bg-blue-500 border-0 rounded  " />
      </div>
      <div className="my-8 flex flex-col gap-3">
        <DropDowns
          title="Track I: MACHINE LEARNING"
          items={machineLearningItems}
        />
        <DropDowns
          title="Track II: AI & DEEP LEARNING"
          items={aiDeepLearningItems}
        />
        <DropDowns
          title="Track III: DATA ENGINEERING"
          items={dataEngineeringItems}
        />
        <DropDowns
          title="Track IV: Computer Vision and Image Processing"
          items={computerVisionItems}
        />
        <DropDowns
          title="Track V: Advancements in Natural Language Processing"
          items={nlpItems}
        />
      </div>
    </div>
  );
};

export default Conference;
