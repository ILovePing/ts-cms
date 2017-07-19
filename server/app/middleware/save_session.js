module.exports = () => {
  return function* (next) {
    yield next;
    // 如果 Session 是空的，则不保存
    if (!this.session) return;
    this.session.save();
  };
};
