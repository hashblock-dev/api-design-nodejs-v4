import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req: any, res: any) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: await hashPassword(password),
      },
    });

    const token = createJWT(user);
    res.status(201).json({ token });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signInUser = async (req: any, res: any) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user || !(await comparePasswords(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = createJWT(user);
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
