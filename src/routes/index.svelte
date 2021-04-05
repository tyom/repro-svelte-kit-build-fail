<script context="module">
  export async function load({ fetch }) {
    const getData = (resourceName) =>
      fetch(resourceName).then((res) => res.json());

    return {
      props: {
        content: await getData(`/test.json`),
      },
    };
  }
</script>

<script>
  export let content;
</script>

<h1>{content.title}</h1>
