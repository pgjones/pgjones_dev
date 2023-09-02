<script lang="ts">
  import Book from "$lib/Book.svelte";
</script>

<svelte:head>
  <title>Recommended Books | PGJones</title>
  <meta
    name="description"
    content="The books I've read and recommend."
  />
</svelte:head>

<section class="cta-section theme-bg-light py-5">
  <div class="container text-center single-col-max-width">
    <h2 class="heading">Recommended Books</h2>
    <p class="intro">
      These are the books I've read and I believe have helped me
      develop my skills and my career. They are in an order I'd also
      recommend based on development.
    </p>
  </div>
</section>

<section class="projects-list px-3 py-5 p-md-5">
  <div class="container">
    <div class="project-cards row isotope">

      <Book
        description="I found this to have a very clear message about building practical code with a lot of very relevant tips."
        imgSrc="/static/media/PragmaticProgrammer.jpg"
        linkHref="https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/"
        name="The Pragmatic Programmer"
        publisher="The Pragmatic Bookshelf"
      />

      <Book
        description="I found this book to have many practical examples on how to structure and write code to be read. I found it became repetitive though, so don't worry about the length."
        imgSrc="/static/media/CleanCode.jpg"
        linkHref="https://www.pearson.com/en-us/subject-catalog/p/clean-code-a-handbook-of-agile-software-craftsmanship/P200000009044"
        name="Clean Code"
        publisher="Pearson"
      />

      <Book
        description="A great book with examples of typical algorithmic style interview questions. This then leetcode."
        imgSrc="/static/media/CrackingTheCodingInterview.png"
        linkHref="https://www.crackingthecodinginterview.com/"
        name="Cracking the Coding Interview"
        publisher="Career cup"
      />

      <Book
        description="Not a book, but a great learning resource"
        imgSrc="/static/media/AlgorithmsI.png"
        linkHref="https://www.coursera.org/learn/algorithms-part1"
        name="Algorithms, Part I & II"
        publisher="Princeton University"
      />

      <Book
        description="A reference book (don't read cover to cover) for algorithms and data structures."
        imgSrc="/static/media/IntroductionToAlgorithms.jpg"
        linkHref="https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/"
        name="Introduction to Algorithms"
        publisher="MIT Press"
      />

      <Book
        description="I mostly work in Python and this is a great book of tips and techniques."
        imgSrc="/static/media/EffectivePython.jpg"
        linkHref="https://effectivepython.com/"
        name="Effective Python"
        publisher="Pearson"
      />

      <Book
        description="I prefer Typescript over Javascript and this is a great book of tips and techniques."
        imgSrc="/static/media/EffectiveTypescript.jpg"
        linkHref="https://effectivetypescript.com/"
        name="Effective Typescript"
        publisher="O'Reilly"
      />

      <Book
        description="Introduction to design systems."
        imgSrc="/static/media/AtomicDesign.svg"
        linkHref="https://atomicdesign.bradfrost.com/"
        name="Atomic Design"
        publisher="Brad Frost"
      />

      <Book
        description="A great practical introducion to the microservices pattern (for large teams)."
        imgSrc="/static/media/BuildingMicroservices.jpg"
        linkHref="https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/"
        name="Building Microservices"
        publisher="O'Reilly"
      />

      <Book
        description="System designs built with Python."
        imgSrc="/static/media/ArchitecturePatternsWithPython.jpg"
        linkHref="https://www.oreilly.com/library/view/architecture-patterns-with/9781492052197/"
        name="Architecture Patterns with Python"
        publisher="O'Reilly"
      />

      <Book
        description="SQL is great, but it can take a lot of learning to understand its performance."
        imgSrc="/static/media/SQLPerformanceExplained.jpg"
        linkHref="https://sql-performance-explained.com/"
        name="SQL Performance Explained"
        publisher="Markus Winand"
      />

      <Book
        description="The book on operating software, incredible."
        imgSrc="/static/media/SiteReliabilityEngineering.jpg"
        linkHref="https://www.oreilly.com/library/view/site-reliability-engineering/9781491929117/"
        name="Site Reliability Engineering"
        publisher="O'Reilly"
      />

      <Book
        description="How to successfully operate a complex system."
        imgSrc="/static/media/ReleaseIt.jpg"
        linkHref="https://pragprog.com/titles/mnee2/release-it-second-edition/"
        name="Release it!"
        publisher="The Pragmatic Bookshelf"
      />

      <Book
        description="The definition of product management."
        imgSrc="/static/media/Inspired.jpg"
        linkHref="https://www.wiley.com/en-gb/INSPIRED%3A+How+to+Create+Tech+Products+Customers+Love%2C+2nd+Edition-p-9781119387503"
        name="INSPIRED: How to Create Tech Products Customers Love"
        publisher="Wiley"
      />

      <Book
        description="Timeless practical advice on how to interact with people."
        imgSrc="/static/media/HowToWinFriends.jpg"
        linkHref="https://www.penguinrandomhouse.ca/books/608043/how-to-win-friends-and-influence-people-by-dale-carnegie/9780735253513"
        name="How to win friends and influence people"
        publisher="Vermilion"
      />

      <Book
        description="How to manage projects, see also the Goal (similar book but not tech focused)."
        imgSrc="/static/media/ThePhoenixProject.jpg"
        linkHref="https://itrevolution.com/product/the-phoenix-project/"
        name="The Phoenix Project"
        publisher="IT Revolution"
      />

      <Book
        description="Timeless advice on developer productivity."
        imgSrc="/static/media/Peopleware.jpg"
        linkHref="https://www.oreilly.com/library/view/peopleware-productive-projects/9780133440706/"
        name="Peopleware"
        publisher="Addison-Wesley Professional"
      />

      <Book
        description="How to manage teams"
        imgSrc="/static/media/HighOutputManagement.jpg"
        linkHref="https://www.penguinrandomhouse.com/books/72467/high-output-management-by-andrew-s-grove-former-chairman-and-ceo-of-intel/"
        name="High output management"
        publisher="Penguin Random House"
      />

      <Book
        description="Great teams have great cultures."
        imgSrc="/static/media/CultureCode.jpg"
        linkHref="https://danielcoyle.com/the-culture-code/"
        name="The Culture Code"
        publisher="Penguin Random House"
      />

      <Book
        description="Best book I've ever read. How to run processes, how to focus (eliminating waste), and many practical techniques."
        imgSrc="/static/media/ToyotaWay.jpg"
        linkHref="https://www.mheducation.co.uk/the-toyota-way-second-edition-14-management-principles-from-the-world-s-greatest-manufacturer-9781260468526-emea"
        name="The Toyota Way"
        publisher="McGraw-Hill Education"
      />

    </div>
  </div>
</section>
