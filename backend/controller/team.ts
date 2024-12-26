import Team from "./../model/team";
import dotenv from "dotenv";
import { Request, Response } from "express";

export const getTeam = async (req: Request, res: Response): Promise<void> => {
  try {
    const info = await Team.find();
    res.send(info);
  } catch (error) {
    res.status(500).send("An error occurred while retrieving the team");
  }
};

export const createTeam = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, designation, email, phoneNo, linkedin } = req.body;

    // Check for existing team member with the same email, phoneNo, or linkedin
    const existingMember = await Team.findOne({
      $or: [{ email }, { phoneNo }, { linkedin }],
    });

    if (existingMember) {
      res
        .status(400)
        .send(
          "A team member with the same email, phone number, or LinkedIn already exists"
        );
      return;
    }

    const team = new Team({ name, designation, email, phoneNo, linkedin });
    await team.save();
    res.send("Team created successfully");
  } catch (error) {
    res.status(500).send(`An error occurred while creating the team: ${error}`);
  }
};

export const deleteTeam = async function (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email } = req.body;
    const teamMember = await Team.findOneAndDelete({ email });
    if (!teamMember) {
      res.status(404).send("Team member not found");
      return;
    }
    res.send("Team deleted successfully");
  } catch (error) {
    res.status(500).send(`An error occurred while deleting the team: ${error}`);
  }
};
