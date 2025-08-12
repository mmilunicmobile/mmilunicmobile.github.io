/* @refresh reload */
import { createSignal } from 'solid-js';

const quotes = [
  "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" - Nelson Mandela",
  "\"My heart is in the work.\" - Andrew Carnegie",
  "\"Gentlemen prefer bonds.\" - Andrew Mellon",
  "\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\" - James Cameron",
  "\"The only way to do great work is to love what you do.\" - Steve Jobs",
  "\"The best way to predict the future is to create it.\" - Alan Kay",
  "\"We can't help everyone. We can't help one specific person. But if you help one person, it will help them all.\" - John D. Rockefeller",
  "\"Success usually comes to those who are too busy to be looking for it.\" - Henry David Thoreau",
  "\"It is never too late to be what you might have been.\" - George Eliot",
  "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill",
  "\"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.\" - W. Clement Stone",
]

const escapeHtml = unsafe => {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

const [index, setIndex] = createSignal(0);

const CustomQuote = (props, values) => {
  const quote = () => quotes[index() % quotes.length];
  const increment = () => setIndex((prev) => (prev + 1));

  const name = props.name

  return (
    <div style={{
      "-webkit-user-select": "none",
      "user-select": "none"
    }} onclick={increment} >
      {quote()}{name}
    </div >
  );
};

const CodeQuote = (props, values) => {
  const quote = () => quotes[index() % quotes.length];

  return (
    <code>{"<template shadowrootmode=\"open\"><div>\""}{escapeHtml(quote())}{"\"</div></template>"}</code >
  );
};

const CountQuote = (props, values) => {
  return (
    <>
      <span>{index()}</span><span> time</span>
      <Show when={index() != 1}>
        <span>s</span>
      </Show>
    </>
  );
}

export { CountQuote, CustomQuote, CodeQuote }