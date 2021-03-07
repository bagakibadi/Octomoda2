<script>
export default {
  name: 'Logout',
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
  },
  created() {
    this.logout();
  },
};
</script>
