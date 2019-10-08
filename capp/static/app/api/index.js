import session from "./session"

export default {
  /*
   * Users
   */
  getUsers() {
    return session.get("/api/users/")
  },
  getUser({ id }) {
    return session.get(`/api/users/${id}/`)
  },

  /*
   * Talks
   */
  getTalks() {
    return session.get("/api/talks/")
  },
  getTalk({ id }) {
    return session.get(`/api/talks/${id}/`)
  },

  /*
   * Events
   */
  getEvents() {
    return session.get("/api/events/")
  },

  /*
   * Members
   */
  getMembers() {
    return session.get("/api/members/")
  },
}
