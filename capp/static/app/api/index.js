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
  createUser({ email, name, groups }) {
    return session.post("/api/users/", { email, name, groups })
  },
  updateUsers({ id, email, name, groups }) {
    return session.patch(`/api/users/${id}`, { email, name, groups })
  },
  deleteUser({ id }) {
    return session.delete(`/api/users/${id}`)
  },

  /*
   * Groups
   */
  getGroups() {
    return session.get("/api/groups/")
  },
  createGroup({ name }) {
    return session.post("/api/groups/", { name })
  },
  updateGroup({ id, name }) {
    return session.patch(`/api/groups/${id}`, { name })
  },
  deleteGroup({ id }) {
    return session.delete(`/api/groups/${id}`)
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
  createTalk({ name, description, notes, abstract }) {
    return session.post("/api/talks/", { name, description, notes, abstract })
  },
  updateTalk({ id, name, description, notes, abstract }) {
    return session.patch(`/api/talks/${id}`, {
      name,
      description,
      notes,
      abstract,
    })
  },
  deleteTalk({ id }) {
    return session.delete(`/api/talks/${id}`)
  },

  /*
   * Speakers
   */
  getSpeakers() {
    return session.get("/api/speakers/")
  },
  getSpeaker({ id }) {
    return session.get(`/api/speakers/${id}/`)
  },
  createSpeaker({ user, talk }) {
    return session.post("/api/speakers/", { user: user.id, talk: talk.id })
  },
  updateSpeaker({ id, user, talk }) {
    return session.patch(`/api/speakers/${id}`, {
      user,
      talk,
    })
  },
  deleteSpeaker({ id }) {
    return session.delete(`/api/speakers/${id}`)
  },

  /*
   * Categories
   */
  getCategories() {
    return session.get("/api/categories/")
  },
  getCategory({ id }) {
    return session.get(`/api/categories/${id}/`)
  },
  createCategory({ name }) {
    return session.post("/api/categories/", { name })
  },
  updateCategory({ id, name }) {
    return session.patch(`/api/categories/${id}`, {
      name,
    })
  },
  deleteCategory({ id }) {
    return session.delete(`/api/categories/${id}`)
  },
}
