import { type ConfigLists } from "../type";
import { Tag } from "../entity/tag";
import { User } from "../entity/user";
import { Project } from "../entity/project";
import { CategoriesProject } from "../entity/categories-project";

export const lists: ConfigLists = { User, Project, CategoriesProject, Tag };
