const MechanicAfterAcceptingNotification = require("./../models/MechanicAfterAcceptingNotification");
const factory = require("./handlerFactory");

exports.postNotification = factory.createOne(
  MechanicAfterAcceptingNotification
);

exports.deleteNotification = factory.deleteOne(
  MechanicAfterAcceptingNotification
);

exports.getNotification = async (req, res, next) => {
  try {
    const Notification =
      await MechanicAfterAcceptingNotification.find().populate({
        path: "User",
      });
    res.status(200).json({
      status: "success",
      result: Notification.length,
      data: Notification,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
