// Posts render at /blog/[slug] using body (an array of paragraph strings).
// Add more posts here, or empty the array to hide the homepage section (/blog stays reachable directly either way).
export const posts = [
  {
    slug: 'building-a-cli-in-go-from-scratch',
    title: 'Building a CLI in Go from Scratch',
    excerpt: 'What the standard library taught me about error handling, without reaching for a framework.',
    date: '2026-07-16',
    readTime: '5 min read',
    tags: ['Go', 'CLI'],
    body: [
      "I wanted a hands-on project to actually learn Go, not just read about it. A todo CLI seemed like the right size: small enough to finish in a weekend, but with enough real surface area — argument parsing, file I/O, persistent state — to force me past the tutorial stage.",
      "The rule I set for myself was no third-party CLI framework. No Cobra, no urfave/cli. Just `os.Args`, the standard library, and whatever I could figure out from the docs. In hindsight, that constraint did more for my understanding of Go than the framework would have.",
      "Tasks are stored as JSON on disk. Every invocation of the CLI reads the file, applies whatever subcommand was passed — add, list, complete, delete — and writes the result back. There's no daemon, no database, no persistent process. It's about as simple as a stateful tool can be.",
      "The part that actually taught me something was error handling. Go doesn't let you ignore errors quietly the way exceptions do in other languages — every fallible call returns an `error` you have to explicitly check. Writing the JSON read/write path by hand meant confronting every place a file could be missing, malformed, or half-written, instead of wrapping the whole thing in a try/catch and moving on.",
      "None of this is groundbreaking software. It's a CLI that manages a JSON file. But building it without a framework's guardrails is what made Go's design decisions click — the explicitness that feels tedious in a tutorial starts to feel deliberate once you've hit the failure cases yourself.",
      "The code is on GitHub if you want to see the whole thing: github.com/ceckles/GO-Task-Cli.",
    ],
  },
];
